import { useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "../services/localStorage";

const LS_CARDS_KEY = "projectCards";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cards] = useLocalStorage(LS_CARDS_KEY, []);

  const project = cards.find((c) => c.id === Number(id));

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.slogan}</p>
      <p>{project.desc}</p>
      <p>{project.technologies}</p>
      <p>{project.author} - {project.job}</p>
      <img src={project.photo} alt={project.name} width="200" />

      <br />
      <button onClick={() => navigate("/create")}>
        Volver
      </button>
    </div>
  );
}

export default ProjectDetail;