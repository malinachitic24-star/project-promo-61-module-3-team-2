import  "../styles/Card.scss"

const Card = ({id, name, species, gender, actor, image, onSelectedCard}) => {
    return <div className="card" >
        
        <h3 className="cardlist-container_id">Id: {id}</h3>
        <h3 className="cardlist-container_name">Name: {name}</h3>
        <h3 className="cardlist-container_species">Species:{species}</h3>
        <h3 className="cardlist-container_gender">Gender: {gender}</h3>
        <h3 className="cardlist-container_actor">Actor: {actor}</h3>
        <img className="cardlist-container_image" src={image}></img>
    </div>

}


export default Card;

