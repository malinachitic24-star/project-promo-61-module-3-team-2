import "../../styles/LandingSyles/Cards.scss";

const Cards= ({imagen,proyecto,nombre,tech})=> {
    return(
        <div className="card_container">
            <div className="card_container_head">
                <h3 className="card_title">{nombre}</h3>
                <img
                    className="card_project-img"
                    src={imagen}
                    alt={proyecto}
                />
                <div className="card_container_info">
                    <p className="card_"></p>
                    <p className="card_tech">{tech}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;