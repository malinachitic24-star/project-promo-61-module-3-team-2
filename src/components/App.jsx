import { Link, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing.jsx";
import Card from "../components/Card.jsx";
import CardListPage from "../Pages/CardListPage.jsx";
import CardDetailPage from "../Pages/CardDetailPage.jsx";


function App() {



  return (
    <>

    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/create" element={<CardListPage/>}/>
      <Route path="/create/:id" element={<CardDetailPage/>}/>
    </Routes>

   
    </>
  );
}

export default App;