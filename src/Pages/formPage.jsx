/* IMPORTS */
import { useState } from "react";
import ProjectForm from "../components/Form/form";
import PreviewCard from "../components/Form/previewCard";
import useLocalStorage from "../services/localStorage";
import { createProjectCard } from "../services/api";

/* LOCAL STORAGE KEYS */
const LS_FORM_KEY = "projectFormData";

/* HELPERS */
const isEmpty = (v) => typeof v !== "string" || v.trim().length === 0;

const isValidUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

// IMG 

const toDataUrl = (value) => {
  if (!value || typeof value !== "string") return "";
  if (value.startsWith("data:image/")) return value;

  // detect format
  if (value.startsWith("iVBORw0")) return `data:image/png;base64,${value}`; // PNG
  if (value.startsWith("/9j/")) return `data:image/jpeg;base64,${value}`; // JPG

  // fallback
  return `data:image/jpeg;base64,${value}`;
};

// return base64
const toPureBase64 = (value) => {
  if (!value || typeof value !== "string") return "";
  const base = value.includes(",") ? value.split(",")[1] : value;
  return base.replace(/\s/g, "").trim();
};

// jpg  and sizes normalize
const normalizeToJpegBase64 = async (value, { maxWidth = 900, quality = 0.8 } = {}) => {
  const dataUrl = toDataUrl(value);
  if (!dataUrl) return "";

  const img = await new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("No pude cargar la imagen."));
    image.src = dataUrl;
  });

  const scale = Math.min(1, maxWidth / img.width);
  const w = Math.max(1, Math.round(img.width * scale));
  const h = Math.max(1, Math.round(img.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext("2d");

  // background
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);

  const jpegDataUrl = canvas.toDataURL("image/jpeg", quality);
  return toPureBase64(jpegDataUrl);
};

function FormPage() {

  /* FORM STATE (WITH LOCALSTORAGE) */
  const [formData, setFormData] = useLocalStorage(LS_FORM_KEY, {
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
  });

  /* API/UI STATE */
  const [isLoading, setIsLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /* CHANGE HANDLER */
  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };

  /* SUBMIT HANDLER */
  const handleSubmitForm = async () => {
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

    // Validations URLs 
    if (!isValidUrl(formData.repo.trim())) {
      setErrorMessage("La URL del repositorio no parece válida.");
      return;
    }
    if (!isValidUrl(formData.demo.trim())) {
      setErrorMessage("La URL de la demo no parece válida.");
      return;
    }

    setIsLoading(true);

    try {
      // Normalize img to jpg 
      const authorImageBase64 = await normalizeToJpegBase64(formData.image, {
        maxWidth: 900,
        quality: 0.8,
      });

      const projectPhotoBase64 = await normalizeToJpegBase64(formData.photo, {
        maxWidth: 1200,
        quality: 0.8,
      });

      const payload = {
        name: formData.name.trim(),
        slogan: formData.slogan.trim(),
        technologies: formData.technologies.trim(),
        repo: formData.repo.trim(),
        demo: formData.demo.trim(),
        desc: formData.desc.trim(),
        autor: formData.author.trim(),
        job: formData.job.trim(),
        image: authorImageBase64,
        photo: projectPhotoBase64, 
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
      setErrorMessage(err.message || "Error inesperado al crear la tarjeta.");
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
            isLoading={isLoading}
          />

          {/* RESULTADO API */}
          <div className="form-result" aria-live="polite">
            {isLoading && <p>Creando tarjeta…</p>}

            {!isLoading && errorMessage && (
              <p className="form-result__error"> {errorMessage}</p>
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
