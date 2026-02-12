import { useState } from "react";
import ProjectForm from "../components/Form/form";
import PreviewCard from "../components/Form/previewCard";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };

  const handleSubmitForm = () => {
    console.log("Formulario enviado:", formData);
  };

  return (
    <main className="form-page">
      <ProjectForm
        formData={formData}
        onChangeForm={handleFormChange}
        onSubmitForm={handleSubmitForm}
      />

      <PreviewCard formData={formData} />
    </main>
  );
}

export default FormPage;
