import "../../styles/LandingSyles/Cards.scss";

const Cards= ({imagen,proyecto,nombre,tech})=> {
    return(
        <div className="card_container">
            <header className="card_header">
                <img
                    className="card_project-img"
                    src={imagen}
                    alt={proyecto}
                />
            </header>

            <div className="card_body">
                <h3 className="card_title">{nombre}</h3>
                <p className="card_"></p>
                <p className="card_tech">{tech}</p>
            </div>
        </div>
    )
}

export default Cards;