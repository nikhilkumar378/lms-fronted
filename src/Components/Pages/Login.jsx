import { useState } from "react";
import toast  from "react-hot-toast";
import { useDispatch } from "react-redux";
import {Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayouts";
import { login } from "../../Redux/Slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const [logindata, setlogindata] = useState({
    fullname: "",
    email: "",
    password: "",
    avatar: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target; // event ka target ko access krne se html elemnt mil jayega phir us elmnt ka name n value prperty la sakte ho
    setlogindata({
      ...logindata,
      [name]: value,
    });
  }



  async function onlogin(event) {
    event.preventDefault();
    

    if (!logindata.email || !logindata.password){

      toast.error("Please fill all the details")
       return;
    }

    const response = await dispatch(login(logindata));
   
    
    if (response?.payload?.success);
    console.log(response);
    // dispatch create account action

    navigate("/");

    setlogindata({
     
      email: "",
      password: "",
    
    });
  
  }

  return (
   
 

      <HomeLayout>
        <div className="flex justify-center items-center h-[100vh]">
          <form
            noValidate
            onSubmit={onlogin}
            className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
          >
            <h1 className=" text-center text-2xl font-bold ">
              Login Page
            </h1>

           

            <input
              
              type="file"
              className="hidden"
              name="image_uploads"
              id="image_uploads"
              accept=".jpg, .jpeg, .png, .svg"
            />

           

            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Enter your email"
                className="border bg-transparent px-2 py-1"
                onChange={handleUserInput}
                value={setlogindata.email}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                required
                name="password"
                id="password"
                placeholder="Enter your password"
                className="border bg-transparent px-2 py-1"
                onChange={handleUserInput}
                value={setlogindata.password}
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-500 px-2 py-2 transition-all ease-in-out duration-300 cursor-pointer rounded-sm font-semibold mt-2"
            >
              Login
            </button>

            <div className="text-center">
              Do not have an account ?{" "}
              <Link to="/signup" className="cursor-pointer link text-accent ">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </HomeLayout>
      
    
  );
}

export default Login;