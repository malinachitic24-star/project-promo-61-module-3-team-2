import "./../styles/LandingSyles/AboutUs.scss";
import Cards from "./propts/Cards";
import CrisLogo from "../images/imagen.cris.png";
import NidiaLogo from "../images/imagen.nidia.png"
import SorayaLogo from "../images/imagen.soraya.png"
import MalinaLogo from "../images/imagen.malina.png"

function AboutUs (){
    const company= [
        {
            imagen: NidiaLogo,
            nombre:"Nidia",
            tech:"Full Stack Developer",
            city:"Mallorca",
            description:"Reflexiva y Práctica"
        },
        {
            imagen: CrisLogo,
            nombre:"Cristina",
            tech:"Full Stack Developer",
            city:"Gijón",
            description:"Positiva y Creativa"
        },
        {
            imagen: SorayaLogo,
            nombre:"Soraya",
            tech:"Full Stack Developer",
            city:"Madrid",
            description:"Equilibrada y Colaborativa"
        },
        {
            imagen: MalinaLogo,
            nombre:"Malina",
            tech:"Full Stack Developer",
            city:"Zaragoza",
            description:"Enérgica y Proactiva"
        }

    ];


    return(
        <main className="about-us">
        <section>
            <div className="container-about-us">
                <div className="about-us-info">
                    <h1 className="about-us-title">Women in Tech Space</h1>
                    <p className="about-us-text">
                        <p><b>¿Y si las oportunidades y la igualdad, como el espacio, no tuvieran límites?</b></p><br></br>
                        <p>Esa fue la pregunta que potenció la idea revolucionaria de <b>Women in Tech Space</b>. Un espacio donde la mujer es la protagonista de sus sueños, sus ideas y sus proyectos, compartiéndolos en una comunidad de oportunidades e igualdad ante el monopolio masculino del mundo tech.</p><br></br>
                        Caminamos de la mano de una de las más inspiradoras empresas, <b>Adalab</b>, quienes lideran la formación y el acompañamiento de las inconformistas, las valientes, las rebeldes y las decididas a tener una vida mejor sin importar su procedencia.<br></br>
                        <br></br>
                        <p>Teniendo todas algo en común: <b>somos las valientes preparadas para brillar</b>.</p>   
                    </p>
                </div>
                <div className="about-us-container-card">
                    {company.map((persona,index)=>(
                        <Cards
                            key={index}
                            imagen={persona.imagen}
                            nombre={persona.nombre}
                            tech={persona.tech}
                            description={persona.description}
                            city={persona.city}
                         />
                    ))}
                        

                   
                </div>
            </div>

        </section>
        </main>
    )
}

export default AboutUs