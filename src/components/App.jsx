//import { useState } from 'react'
import "../styles/App.scss";
import AboutUs from "./AboutUs";
import Header from "./Header";
import FormPage from "../Pages/formPage";
import { Link, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing.jsx";
import Card from "../components/Card.jsx";
import Footer from "./Footer.jsx";
import ProjectDetail from "../Pages/projectDetail.jsx";
import ProjectsPage from "../Pages/projectsPage.jsx";

function App() {
  return (
    <>
        <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<ProjectsPage/>} />
        <Route path="/create/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={<FormPage />}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
      </Routes>
    </>
  );
}

export default App;
