import "../../styles/form.scss";



function Form({ formData, onChangeForm, onSubmitForm }) {
  const handleChange = (ev) => {
    const { name, value } = ev.target;

    onChangeForm({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmitForm();
  };

  const handleImageChange = (ev) => {
  const file = ev.target.files[0];
  const { name } = ev.target;

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    onChangeForm({
      ...formData,
      [name]: reader.result,
    });
  };

  reader.readAsDataURL(file);
};


  return (
    <form className="project-form" onSubmit={handleSubmit} aria-label="Formulario de proyecto">
      <fieldset className="project-form__fieldset">
        <legend className="project-form__legend">Información del proyecto</legend>

        <input
          className="project-form__input"
          id="name"
          type="text"
          name="name"
          placeholder="Nombre del proyecto"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="project-form__input"
          id="slogan"
          type="text"
          name="slogan"
          placeholder="Slogan"
          value={formData.slogan}
          onChange={handleChange}
        />


        <input
          className="project-form__input"
          id="technologies"
          type="text"
          name="technologies"
          placeholder="Tecnologías"
          value={formData.technologies}
          onChange={handleChange}
        />

        <input
          className="project-form__input"
          id="repo"
          type="url"
          name="repo"
          placeholder="Repositorio"
          value={formData.repo}
          onChange={handleChange}
        />

        <input
          className="project-form__input"
          id="demo"
          type="url"
          name="demo"
          placeholder="Demo"
          value={formData.demo}
          onChange={handleChange}
        />


        <textarea
          className="project-form__textarea"
          id="desc"
          name="desc"
          placeholder="Descripción"
          value={formData.desc}
          onChange={handleChange}
          rows={4}
        />
      </fieldset>

      <fieldset className="project-form__fieldset">
        <legend className="project-form__legend">Información de la autora</legend>

        <input
          className="project-form__input"
          id="autor"
          type="text"
          name="autor"
          placeholder="Nombre"
          value={formData.autor}
          onChange={handleChange}
        />

        <input
          className="project-form__input"
          id="job"
          type="text"
          name="job"
          placeholder="Trabajo"
          value={formData.job}
          onChange={handleChange}
        />
      </fieldset>

        <fieldset className="project-form__fieldset">

        <div className="project-form__uploadRow">
            <label className="project-form__uploadBtn" htmlFor="photo">
            Subir foto del
            <br />
            proyecto
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
            Subir foto de la
            <br />
            autora
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




      <button className="project-form__btn" type="submit">
        Crear Proyecto Molón
      </button>
    </form>
  );
}

export default Form;
