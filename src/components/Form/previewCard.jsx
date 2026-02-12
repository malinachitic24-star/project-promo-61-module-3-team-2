import placeholderImg from "../../images/PlaceholderPhoto.png";

function PreviewCard({ formData }) {
  const {
    name,
    slogan,
    technologies,
    repo,
    demo,
    desc,
    autor,
    job,
    image,
    photo,
  } = formData;

  const safeProjectName = name?.trim() || "Nombre del proyecto";
  const safeSlogan = slogan?.trim() || "Slogan del proyecto";
  const safeTech = technologies?.trim() || "React • Sass • Git";
  const safeDesc =
    desc?.trim() ||
    "Aquí aparecerá la descripción del proyecto. Cuéntanos qué hace y por qué mola.";
  const safeAutor = autor?.trim() || "Nombre de la autora";
  const safeJob = job?.trim() || "Front-end developer";

  const safeAuthorImg = image?.trim() || placeholderImg;
  const safeProjectImg = photo?.trim() || placeholderImg;

  return (
    <section className="preview" aria-label="Previsualización de la tarjeta">
      <article className="preview__card">
        
        <header className="preview__header">
          <img
            className="preview__project-img"
            src={safeProjectImg}
            alt="Imagen del proyecto"
          />
        </header>

        <div className="preview__body">
          <h3 className="preview__title">{safeProjectName}</h3>
          <p className="preview__slogan">{safeSlogan}</p>
          <p className="preview__tech">{safeTech}</p>
          <p className="preview__desc">{safeDesc}</p>

          <div className="preview__links">
            {repo?.trim() && (
              <a
                href={repo.trim()}
                target="_blank"
                rel="noreferrer"
                className="preview__link"
              >
                Repo
              </a>
            )}

            {demo?.trim() && (
              <a
                href={demo.trim()}
                target="_blank"
                rel="noreferrer"
                className="preview__link"
              >
                Demo
              </a>
            )}

            {!repo?.trim() && !demo?.trim() && (
              <p className="preview__links-empty">
                Añade Repo y/o Demo para que aparezcan aquí ✨
              </p>
            )}
          </div>
        </div>

        <footer className="preview__footer">
          <img
            className="preview__author-img"
            src={safeAuthorImg}
            alt="Foto de la autora"
          />
          <div className="preview__author-info">
            <p className="preview__author">{safeAutor}</p>
            <p className="preview__job">{safeJob}</p>
          </div>
        </footer>

      </article>
    </section>
  );
}

export default PreviewCard;

