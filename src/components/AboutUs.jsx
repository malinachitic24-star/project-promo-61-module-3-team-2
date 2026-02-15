import "./../styles/LandingSyles/AboutUs.scss";
import Cards from "./propts/Cards";
import AstroLogo from "../images/avatar.webp";

function AboutUs (){
    const company= [
        {
            imagen: {AstroLogo},
            nombre:"Nidia",
            tech:"Tech",
        },
        {
            imagen: "",
            nombre:"",
            tech:"",
        },
        {
            imagen: "",
            nombre:"",
            tech:"",
        },
        {
            imagen: "",
            nombre:"",
            tech:"",
        }

    ];


    return(
        <main className="about-us">
        <section>
            <div className="container-about-us">
                <div className="about-us-info">
                <h1 className="about-us-title">Women in Tech Space</h1>
                <p className="about-us-text">
                    <b>¿Y si las oportunidades y la igualdad, como el espacio, no tuvieran límites?</b><br></br>
                    Esa fue la pregunta que potenció la idea revolucionaria de Women in Tech Space. Un espacio donde la mujer es la protagonista de sus sueños, sus ideas y sus proyectos, compartiéndolos en una comunidad de oportunidades e igualdad ante el monopolio masculino del mundo tech.
                    Caminamos de la mano de una de las más inspiradoras empresas, Adalab, quienes lideran la formación y el acompañamiento de las inconformistas, las valientes, las rebeldes y las decididas a tener una vida mejor sin importar su procedencia.
                    
                    Teniendo todas algo en común: somos las valientes preparadas para brillar.    
                </p>
                </div>
                <div className="about-us-container-card">
                    {company.map((persona,index)=>(
                        <Cards
                            key={index}
                            imagen={persona.imagen}
                            nombre={persona.nombre}
                            tech={persona.tech}
                         />
                    ))}
                        

                   
                </div>
            </div>

        </section>
        </main>
    )
}

export default AboutUs