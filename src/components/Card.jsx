import  "../styles/Card.scss"

const Card = ({id, name, species, gender, actor, image}) => {
    return <div className="cardlist" style={{width: "120px", display: "flex", "flex-direction": "column", justifyContent: "center"}} onClick={() => onSelectCard?.(id)}>
        
        <h3 className="cardlist-container_id">Titulo: {id}</h3>
        <h3 className="cardlist-container_name">{name}</h3>
        <h3 className="cardlist-container_species">{species}</h3>
        <h3 className="cardlist-container_gender">{gender}</h3>
        <h3 className="cardlist-container_actor">{actor}</h3>
        <img className="cardlist-container_image" src={image} style={{"width": "100px"}}></img>
    </div>

}


export default Card;

