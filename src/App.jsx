import "./App.css";

import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import AboutUs from "./Components/Pages/AboutUs";
import HomePage from "./Components/Pages/HomePage"
import Login from "./Components/Pages/Login";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (

    <>
    <Toaster />
      <Routes>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="*"  element={<NotFoundPage/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>

      
    </>
  );
}

export default App;
