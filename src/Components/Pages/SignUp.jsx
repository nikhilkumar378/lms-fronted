import { useState } from "react";
import toast  from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayouts";
import { createAccount } from "../../Redux/Slices/AuthSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [previewimage, setpreveiwimage] = useState();

  const [signupdata, setsignupdata] = useState({
    fullname: "",
    email: "",
    password: "",
    avatar: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target; // event ka target ko access krne se html elemnt mil jayega phir us elmnt ka name n value prperty la sakte ho
    setsignupdata({
      ...signupdata,
      [name]: value,
    });
  }

  function getImage(event) {
    event.preventDefault();

    const uploadedImage = event.target.files[0];

    if (uploadedImage) {
      setsignupdata({
        ...signupdata,
        avatar: uploadedImage,
      });

      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setpreveiwimage(this.result);
      });
    }
  }

  async function createNewaccount(event) {
    event.preventDefault();
    

    if (
      !signupdata.email ||
      !signupdata.fullname ||
      !signupdata.password ||
      !signupdata.avatar
    ) {
      
     toast.error("Please fill all the details")
      return;
    }
    
    if (signupdata.fullname.length < 5) {
      console.log('coming in sign up length')
    toast.error("Name should be atleast of 5 char")
      return;
    }

    if (
      !signupdata.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ) {
      toast.error("Invalid email");
      return;
    }

    if (signupdata.password.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/)) {
      toast.error("Invalid Password");
    }

    const formData = new FormData();
    formData.append("fullname", signupdata.fullname);
    formData.append("email", signupdata.email);
    formData.append("password", signupdata.password);
    formData.append("avatar", signupdata.avatar);

    const response = await dispatch(createAccount(formData));
   
    
    if (response?.payload?.success);
    console.log(response);
    // dispatch create account action

    navigate("/");

    setsignupdata({
      fullname: " ",
      email: "",
      password: "",
      avatar: "",
    });
    setpreveiwimage("");
  }

  return (
   
 

      <HomeLayout>
        <div className="flex justify-center items-center h-[100vh]">
          <form
            noValidate
            onSubmit={createNewaccount}
            className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
          >
            <h1 className=" text-center text-2xl font-bold ">
              Registration Page
            </h1>

            <label htmlFor="image_uploads" className="cursor-pointer">
              {previewimage ? (
                <img
                  className="w-24 h-24 rounded-full m-auto"
                  src={previewimage}
                />
              ) : (
                <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
              )}
            </label>

            <input
              onChange={getImage}
              type="file"
              className="hidden"
              name="image_uploads"
              id="image_uploads"
              accept=".jpg, .jpeg, .png, .svg"
            />

            <div className="flex flex-col">
              <label htmlFor="Name" className="font-semibold">
                Name
              </label>
              <input
                type="Name"
                required
                name="fullname"
                id="Name"
                placeholder="Enter your Name"
                className="border bg-transparent px-2 py-1"
                onChange={handleUserInput}
                value={signupdata.fullname}
              />
            </div>

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
                value={signupdata.email}
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
                value={signupdata.password}
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-500 px-2 py-2 transition-all ease-in-out duration-300 cursor-pointer rounded-sm font-semibold mt-2"
            >
              Create account
            </button>

            <div className="text-center">
              Already have an account ?{" "}
              <Link to="/login" className="cursor-pointer link text-accent ">
                Login
              </Link>
            </div>
          </form>
        </div>
      </HomeLayout>
      
    
  );
}

export default SignUp;
