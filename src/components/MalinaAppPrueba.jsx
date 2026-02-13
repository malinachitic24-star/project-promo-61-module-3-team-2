//import { useState } from 'react'
import "../styles/MalinaAppStyle.scss";
import Header from "./Header";
import Landing from "./Landing/Landing";
import { Routes, Route } from "react-router-dom";

function MalinaApp() {
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </div>
  );
}

export default MalinaApp;
