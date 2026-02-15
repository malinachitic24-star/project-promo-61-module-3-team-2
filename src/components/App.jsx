//import { useState } from 'react'
import "../styles/App.scss";
import AboutUs from "./AboutUs";
import Header from "./Header";
import FormPage from "../Pages/formPage";
import { Link, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing.jsx";
import Card from "../components/Card.jsx";
import CardListPage from "../Pages/CardListPage.jsx";
import CardDetailPage from "../Pages/CardDetailPage.jsx";


function App() {



  return (
<>
    <div className="body">

      <Header />
      <AboutUs></AboutUs>
    
    </div>
    
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/create" element={<CardListPage/>}/>
      <Route path="/create/:id" element={<CardDetailPage/>}/>
      <Route path="/projects" element={<FormPage />}></Route>
    </Routes>

   
    </>
  );
}

export default App;