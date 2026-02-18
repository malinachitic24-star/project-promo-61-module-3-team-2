/* IMPORTS */
import { useState } from "react";
import ProjectForm from "../components/Form/form";
import PreviewCard from "../components/Form/previewCard";
import useLocalStorage from "../services/localStorage";
import { createProjectCard } from "../services/api";
import Footer from "../components/Footer.jsx";
import HeaderNav from "../components/HeaderNav.jsx";

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

// dataURL o URL
const isValidImageValue = (value) => {
  if (!value || typeof value !== "string") return false;
  const v = value.trim();
  if (v.startsWith("data:image/")) return true;
  return isValidUrl(v);
};

function FormPage() {
  /* FORM STATE (WITH LOCALSTORAGE) */
  const [formData, setFormData] = useLocalStorage(
    LS_FORM_KEY,
    INITIAL_FORM_DATA,
  );

  /* UI STATE */
  const [isLoading, setIsLoading] = useState(false);

  /* CHANGE HANDLER */
  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };

  /* RESET HANDLER */
  const handleResetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    console.clear?.();
    console.log("🧹 Formulario reseteado.");
  };

  /* SUBMIT HANDLER */
  const handleSubmitForm = async () => {
    if (isLoading) return;

    // Required fields
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
      console.warn(`⚠️ Falta completar: ${missing}`);
      return;
    }

    const repo = formData.repo.trim();
    const demo = formData.demo.trim();
    const image = formData.photo.trim();
    const photo = formData.image.trim();

    if (!isValidUrl(repo)) {
      console.warn("⚠️ La URL del repositorio no parece válida.");
      return;
    }
    if (!isValidUrl(demo)) {
      console.warn("⚠️ La URL de la demo no parece válida.");
      return;
    }
    if (!isValidImageValue(image)) {
      console.warn("⚠️ La imagen (avatar) no parece válida. Súbela de nuevo.");
      return;
    }
    if (!isValidImageValue(photo)) {
      console.warn(
        "⚠️ La foto del proyecto no parece válida. Súbela de nuevo.",
      );
      return;
    }

    setIsLoading(true);
    console.log("⏳ Creando tarjeta...");

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
        image,
        photo,
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
        console.error("❌ Respuesta API:", data);
        throw new Error(
          "La API respondió OK, pero no encuentro la URL de la tarjeta.",
        );
      }

      console.log("✅ Tarjeta creada:", url);

      window.location.assign(url);
    } catch (err) {
      console.error("❌ Error creando tarjeta:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <HeaderNav></HeaderNav>
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
        </section>

        {/* LIVE PREVIEW */}
        <aside className="form-layout__preview">
          <PreviewCard formData={formData} />
        </aside>
      </div>
        
    </main>
    <Footer></Footer>
    </>

  );
}

export default FormPage;
