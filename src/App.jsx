import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/HomePage"
import AboutUs from "./Components/Pages/AboutUs";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
      </Routes>

      
    </>
  );
}

export default App;
