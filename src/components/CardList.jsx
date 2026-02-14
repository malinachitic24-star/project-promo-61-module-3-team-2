import  "../styles/CardList.scss"
import {useState, useEffect} from "react";

 const CardList = () => {
const [cards, setCards] = useState([]);


 const fetchCards = async () => {
    try {
      const response = await fetch("https://hp-api.onrender.com/api/characters");
      const data = await response.json();
     setCards(data);
   } catch (error) {
      console.error("Error:", error);}
  };

 useEffect(() => {
   fetchCards();
 }, []);

 return (
  
 <div> 
   <h1 className="cardlist-title">Lista de Cards</h1>
     <ul className="cardlist">
       {
        cards.map((card) => (
          <div className="cardlist-container">
          <li className="card" key={card.id}>
            <h3 className="cardlist-container_name">Name: {card.name}</h3>
             <h3 className="cardlist-container_species">Especie: {card.species}</h3>
             <h3 className="cardlist-container_gender">Gender: {card.gender}</h3>
             <h3 className="cardlist-container_actor">Actor: {card.actor} </h3>
            <h3>{card.actor}</h3>
            <img className="cardlist-container_image" src={card.image}/>
           </li>
           </div>
         ))
      }
      
     </ul>

 </div>

 )


 }

 export default CardList;


