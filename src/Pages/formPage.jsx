/* IMPORTS */
import { useState } from "react";
import ProjectForm from "../components/Form/form";
import PreviewCard from "../components/Form/previewCard";
import useLocalStorage from "../services/localStorage";
import { createProjectCard } from "../services/api";

/* LOCAL STORAGE KEYS */
const LS_FORM_KEY = "projectFormData";

/* INITIAL STATE */
const INITIAL_FORM_DATA = {
  name: "",
  slogan: "",
  technologies: "",
  repo: "",
  demo: "",
  desc: "",
  author: "",
  job: "",
  image: "", 
  photo: "", 
};

/* HELPERS */
const isEmpty = (v) => typeof v !== "string" || v.trim().length === 0;

const isValidUrl = (value) => {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

//  dataURL o URL
const isValidImageValue = (value) => {
  if (!value || typeof value !== "string") return false;
  const v = value.trim();
  if (v.startsWith("data:image/")) return true;
  return isValidUrl(v);
};

//  base64 
const toPureBase64IfDataUrl = (value) => {
  if (!value || typeof value !== "string") return "";
  const v = value.trim();

  //  data:image/...;base64,AAAA
  if (v.startsWith("data:image/")) {
    const parts = v.split(",");
    const b64 = parts[1] ?? "";
    return b64.replace(/\s/g, "");
  }

  // URL
  return v;
};

function FormPage() {
  /* FORM STATE (WITH LOCALSTORAGE) */
  const [formData, setFormData] = useLocalStorage(LS_FORM_KEY, INITIAL_FORM_DATA);

  /* API/UI STATE */
  const [isLoading, setIsLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /* CHANGE HANDLER */
  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };

  /* RESET HANDLER  */
  const handleResetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setResultUrl("");
    setErrorMessage("");
  };

  /* SUBMIT HANDLER */
  const handleSubmitForm = async () => {
    if (isLoading) return;

    setErrorMessage("");
    setResultUrl("");

    // Required
    const requiredFields = [
      "name",
      "slogan",
      "technologies",
      "desc",
      "author",
      "job",
      "repo",
      "demo",
      "image",
      "photo",
    ];

    const missing = requiredFields.find((k) => isEmpty(formData[k]));
    if (missing) {
      setErrorMessage(`Te falta completar: ${missing}`);
      return;
    }

    const repo = formData.repo.trim();
    const demo = formData.demo.trim();
    const image = formData.image.trim();
    const photo = formData.photo.trim();

    if (!isValidUrl(repo)) {
      setErrorMessage("La URL del repositorio no parece válida.");
      return;
    }
    if (!isValidUrl(demo)) {
      setErrorMessage("La URL de la demo no parece válida.");
      return;
    }

    // dataURL o URL
    if (!isValidImageValue(image)) {
      setErrorMessage("La imagen (avatar) no parece válida. Súbela de nuevo.");
      return;
    }
    if (!isValidImageValue(photo)) {
      setErrorMessage("La foto del proyecto no parece válida. Súbela de nuevo.");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        name: formData.name.trim(),
        slogan: formData.slogan.trim(),
        technologies: formData.technologies.trim(),
        repo,
        demo,
        desc: formData.desc.trim(),
        autor: formData.author.trim(),
        job: formData.job.trim(),

        // base64
        image: toPureBase64IfDataUrl(image),
        photo: toPureBase64IfDataUrl(photo),
      };

      const data = await createProjectCard(payload);

      const url =
        data?.cardURL ||
        data?.url ||
        data?.projectCardURL ||
        data?.data?.cardURL ||
        data?.data?.url ||
        "";

      if (!url) {
        throw new Error("La API respondió OK, pero no encuentro la URL de la tarjeta.");
      }

      setResultUrl(url);
    } catch (err) {
      setErrorMessage(err?.message || "Error inesperado al crear la tarjeta.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="form-page">
      <div className="form-layout">
        {/* FORM */}
        <section className="form-layout__form">
          <ProjectForm
            formData={formData}
            onChangeForm={handleFormChange}
            onSubmitForm={handleSubmitForm}
            onResetForm={handleResetForm}
            isLoading={isLoading}
          />

          {/* RESULTADO API */}
          <div className="form-result" aria-live="polite">
            {isLoading && <p>Creando tarjeta…</p>}

            {!isLoading && errorMessage && (
              <p className="form-result__error">{errorMessage}</p>
            )}

            {!isLoading && resultUrl && (
              <p className="form-result__ok">
                Tu tarjeta está aquí:{" "}
                <a href={resultUrl} target="_blank" rel="noreferrer">
                  {resultUrl}
                </a>
              </p>
            )}
          </div>
        </section>

        {/* LIVE PREVIEW */}
        <aside className="form-layout__preview">
          <PreviewCard formData={formData} />
        </aside>
      </div>
    </main>
  );
}

export default FormPage;
