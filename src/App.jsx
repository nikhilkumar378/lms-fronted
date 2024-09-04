import "./App.css";

import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import AboutUs from "./Components/Pages/AboutUs";
import HomePage from "./Components/Pages/HomePage"
import Login from "./Components/Pages/Login";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import SignUp from "./Components/Pages/SignUp";
import CourseList from "./Components/Pages/Course/CourseList";
import Contact from "./Components/Pages/Contact";
import Denied from "./Components/Pages/Denied";
import CourseDescription from "./Components/Pages/Course/CourseDescription";

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
        <Route path="/Courses" element={<CourseList/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="/denied" element={<Denied/>}></Route>
        <Route path="/course/description" element={<CourseDescription/>}></Route>
      </Routes>

      
    </>
  );
}

export default App;
