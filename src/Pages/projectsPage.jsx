import useLocalStorage from "../services/localStorage";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const LS_CARDS_KEY = "projectCards";

function ProjectsPage() {
  const [cards, setCards] = useLocalStorage(LS_CARDS_KEY, []);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate(`/create/${id}`);
  };

  const handleDelete = (id) => {
    const filtered = cards.filter((card) => card.id !== id);
    setCards(filtered);
  };

console.log(cards);

  return (
    <div>
      <h1>Lista de proyectos</h1>

      {cards.length === 0 && <p>No hay proyectos todavía</p>}

      <div className="cardlist">
        {cards.map((card) => (
          <Card
            key={card.id}
            {...card}
            onSelect={handleSelect}
            onDelete={handleDelete}
          />
        ))}
      </div>

      
    </div>
  );
}

export default ProjectsPage;