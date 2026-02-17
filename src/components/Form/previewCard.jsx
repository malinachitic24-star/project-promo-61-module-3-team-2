
/* IMPORTS */
import placeholderImg from "../../images/Space2.png";
import placeholderImg2 from "../../images/placeHolderImg2.png";
import "../../styles/preview.scss";


function PreviewCard({ formData }) {

  /* HELPERS (CLEAN + REUSABLE) */

  const safeText = (value, fallback) => {
    const v = typeof value === "string" ? value.trim() : "";
    return v.length ? v : fallback;
  };

  const safeUrl = (value) => {
    const v = typeof value === "string" ? value.trim() : "";
    return v.length ? v : "";
  };

  const safeImage = (value) => {
    const v = typeof value === "string" ? value.trim() : "";
    return v.length ? v : placeholderImg2;
  };

    const safePhoto = (value) => {
    const v = typeof value === "string" ? value.trim() : "";
    return v.length ? v : placeholderImg;
  };

  /* DESTRUCTURING FORM DATA */

  const { name, slogan, technologies, repo, demo, desc, author, job, image, photo } = formData;

  /* SAFE FALLBACK VALUES */

  const safeProjectName = safeText(name, "Nombre del Proyecto");
  const safeSlogan = safeText(slogan, "Slogan");
  const safeTech = safeText(technologies, "Tecnologías");
  const safeDesc = safeText(
    desc,
    "La descripción de tu proyecto molón aparecerá aquí."
  );

  const safeAuthor = safeText(author, "Nombre de la autora");
  const safeJob = safeText(job, "Puesto de trabajor");

  const safeRepo = safeUrl(repo);
  const safeDemo = safeUrl(demo);

  const safeAuthorImg = safeImage(image);
  const safeProjectImg = safePhoto(photo);


  return (
    <section
      className="preview"
      aria-label="Project card preview"
      aria-live="polite"
      aria-atomic="true"
    >
      <article className="preview__card">

        {/* PROJECT IMAGE HEADER */}

        <header className="preview__header">
          <img
            className="preview__project-img"
            src={safeProjectImg}
            alt="Project screenshot"
          />
        </header>

        {/* CARD BODY */}

        <div className="preview__body">
          <h3 className="preview__title">{safeProjectName}</h3>
          <p className="preview__slogan">{safeSlogan}</p>
          <p className="preview__tech">{safeTech}</p>
          <p className="preview__desc">{safeDesc}</p>

          {/* LINKS  */}
          <div className="preview__links">
            {safeRepo && (
              <a
                href={safeRepo}
                target="_blank"
                rel="noreferrer"
                className="preview__link"
              >
                Repo
              </a>
            )}

            {safeDemo && (
              <a
                href={safeDemo}
                target="_blank"
                rel="noreferrer"
                className="preview__link"
              >
                Demo
              </a>
            )}

            {!safeRepo && !safeDemo && (
              <p className="preview__links-empty">
                Links
              </p>
            )}
          </div>
        </div>

        {/* AUTHOR FOOTER */}
        <footer className="preview__footer">
          <img
            className="preview__author-img"
            src={safeAuthorImg}
            alt="Author profile photo"
          />

          <div className="preview__author-info">
            <p className="preview__author">{safeAuthor}</p>
            <p className="preview__job">{safeJob}</p>
          </div>
        </footer>
      </article>
    </section>
  );
}


export default PreviewCard;
