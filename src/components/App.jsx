import { Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing.jsx";
import CardList from "./CardList.jsx"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    
    <CardList />

    </>
  );
}

export default App;