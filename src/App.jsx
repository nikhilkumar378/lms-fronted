import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/HomePage"
import AboutUs from "./Components/Pages/AboutUs";
import NotFoundPage from "./Components/Pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="*"  element={<NotFoundPage/>}></Route>
      </Routes>

      
    </>
  );
}

export default App;
