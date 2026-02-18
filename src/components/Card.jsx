import "../styles/Card.scss";

const Card = ({
  id,
  name,
  slogan,
  technologies,
  author,
  job,
  photo,
  onSelect,
  onDelete,
}) => {
  return (

    <> 
    <div className="card">
      <div onClick={() => onSelect(id)} style={{ cursor: "pointer" }}>
        <h3>{name}</h3>
        <p>{slogan}</p>
        <p>{technologies}</p>
        <p>{author} - {job}</p>
        <img src={photo} alt={name} width="150" />
      </div>

      <button onClick={() => onDelete(id)}>🗑 Borrar</button>

      
    </div>
    
</>
  );
};

export default Card