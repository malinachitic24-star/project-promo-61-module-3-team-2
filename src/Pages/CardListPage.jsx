// import {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
// import Card from "../components/Card";
// import  "../styles/Card.scss"

//  const CardList = () => {
// const [cards, setCards] = useState([]);


//  const fetchCards = async () => {
//     try {
//       const response = await fetch("https://api-pw.dev.adalab.es/api/cards");
//       const data = await response.json();
//      setCards(data);
//    } catch (error) {
//       console.error("Error:", error);}
//   };

//  useEffect(() => {
//    fetchCards();
//  }, []);

//    const onSelect = (id) => {
//     const selectedCard = cards.find((e) => e.id === id);
//     if (selectedCard) alert("Seleccionada la card");
//   };


//  return (
//     <>
//  <h1>Lista de proyectos</h1>
//  <div className="cardlist"> 
//        {cards.map((card) => (
//         <Link key={card.id} to={`/create/${card.id}`}>
//           <Card
//             onSelectCard={onSelect}
//             id={card.id}
//             name={card.name}
//             gender={card.gender}
//             actor={card.actor}
//             image={card.image}
//           />
//         </Link>
          
//          ))
//       }
      
//  </div>
// </>
//  )


//  }

//  export default CardList;

