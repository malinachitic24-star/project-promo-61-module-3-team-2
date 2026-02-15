//import { useState } from 'react'
import "../styles/App.scss";
import AboutUs from "./AboutUs";
import Header from "./Header";
import Landing from "./Landing/Landing";
import { Routes, Route } from "react-router-dom";
import FormPage from "../Pages/formPage";



function App() {
  return (
    <div className="body">


      <Header />
      <AboutUs></AboutUs>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/projects" element={<FormPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
