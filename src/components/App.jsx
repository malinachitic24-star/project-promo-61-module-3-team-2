import {Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing.jsx";
import Card from "../components/Card.jsx";
import CardListPage from "../Pages/CardListPage.jsx";
import { Link } from "react-router-dom";



function App() {



  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/create" element={<CardListPage/>}/>
    </Routes>

   
    </>
  );
}

export default App;