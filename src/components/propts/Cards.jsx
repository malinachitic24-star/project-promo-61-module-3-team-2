import "../../styles/LandingSyles/Cards.scss";

const Cards= ({imagen,nombre,tech,description,city})=> {
    return(
        <div className="card_container">
            <div className="card_container_head">
                <h3 className="card_title">{nombre}</h3>
                <img
                    className="card_project-img"
                    src={imagen}
                    alt={nombre}
                />
                <div className="card_container_info">
                    <p className="card_tech">{tech}</p>
                    <p className="card_city">{city}</p>
                    <p className="card_description">{description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards;