/* IMPORTS */
import "../../styles/form.scss";

function Form({ formData, onChangeForm, onSubmitForm, onResetForm, isLoading }) {
  /* TEXT INPUT HANDLER */
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    onChangeForm({ ...formData, [name]: value });
  };

  /* SUBMIT HANDLER */
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!isLoading) onSubmitForm();
  };

  /* IMAGE INPUT HANDLER */
  const handleImageChange = (ev) => {
    const file = ev.target.files?.[0];
    const { name } = ev.target;
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const dataUrl = reader.result; 
      onChangeForm({ ...formData, [name]: dataUrl });
      ev.target.value = ""; 
    };

    reader.onerror = () => {
      console.warn("No pude leer el archivo.");
      ev.target.value = "";
    };

    reader.readAsDataURL(file);
  };

  return (
    <form className="project-form" onSubmit={handleSubmit} aria-label="Project form">
      {/* PROJECT INFO SECTION */}
      <fieldset className="project-form__fieldset" disabled={isLoading}>
        <legend className="project-form__legend">Información del Proyecto</legend>
        <legend className="project-form__legend_2">Cuéntanos sobre tu proyecto</legend>

        <input required className="project-form__input" id="name" type="text" name="name"
          placeholder="Nombre del Proyecto" value={formData.name} onChange={handleChange} />

        <input required className="project-form__input" id="slogan" type="text" name="slogan"
          placeholder="Slogan" value={formData.slogan} onChange={handleChange} />

        <input required className="project-form__input" id="technologies" type="text" name="technologies"
          placeholder="Tecnologías" value={formData.technologies} onChange={handleChange} />

        <input required className="project-form__input" id="repo" type="url" name="repo"
          placeholder="URL repositorio" value={formData.repo} onChange={handleChange} />

        <input required className="project-form__input" id="demo" type="url" name="demo"
          placeholder="URL Demo" value={formData.demo} onChange={handleChange} />

        <textarea required className="project-form__textarea" id="desc" name="desc"
          placeholder="Descripción" value={formData.desc} onChange={handleChange} rows={4} />
      </fieldset>

      {/* AUTHOR INFO SECTION */}
      <fieldset className="project-form__fieldset" disabled={isLoading}>
        <legend className="project-form__legend_2">Cuéntanos sobre la autora</legend>

        <input required className="project-form__input" id="author" type="text" name="author"
          placeholder="Nombre de la autora" value={formData.author} onChange={handleChange} />

        <input required className="project-form__input" id="job" type="text" name="job"
          placeholder="Puesto de trabajo" value={formData.job} onChange={handleChange} />
      </fieldset>

      {/* IMAGE UPLOAD SECTION */}
      <fieldset className="project-form__fieldset" disabled={isLoading}>
        <legend className="project-form__legend_2">Carga las imágenes</legend>

        <div className="project-form__uploadRow">
          <label className="project-form__uploadBtn" htmlFor="photo">
            Subir foto<br />del proyecto
          </label>
          <input
            id="photo"
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleImageChange}
            className="project-form__fileInput"
          />

          <label className="project-form__uploadBtn" htmlFor="image">
            Subir foto<br />de la autora
          </label>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="project-form__fileInput"
          />
        </div>
      </fieldset>

      {/* BUTTONS */}
      <div className="project-form__btn-container">
        <button className="project-form__btn" type="submit" disabled={isLoading}>
          {isLoading ? "Creando..." : "Crear proyecto molón"}
        </button>

        <button
          type="button"
          onClick={onResetForm}
          className="project-form__btn project-form__btn--secondary"
          disabled={isLoading}
        >
          Borrar Datos
        </button>
      </div>
    </form>
  );
}

export default Form;
