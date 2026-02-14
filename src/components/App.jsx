//import { useState } from 'react'
import "../styles/App.scss";
import Header from "./Header";
import Landing from "./Landing/Landing";
import { Routes, Route } from "react-router-dom";

//Borrar antes de mergear
import FormPage from "../Pages/formPage";


function App() {
  return (
    <div className="body">


      <Header />
      <FormPage />

      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
