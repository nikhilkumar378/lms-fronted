import { useState } from "react"
import HomeLayout from "../../Layouts/HomeLayouts"
import toast from "react-hot-toast"
import { isemail } from "../../Helpers/regexMtcher"

function Contact(){

  const[userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  })

  function handleUserInput(e){
    const{name, value} = e.target
    console.log(name, value)
    setUserInput({
      ...userInput, 
      [name]:value
  })
  }

 async function onFormSubmit(e){
e.preventDefault();

if(!userInput.email || !userInput.name || !userInput.message){
  toast.error("All fields are required");
  return
}

if(!isemail(userInput.email)){
  toast.error("Email is Invalid")
  return
}
  }
return(
   <HomeLayout>
  <div className="flex items-center justify-center h-[100vh]">
  <form 
  noValidate
  onSubmit={onFormSubmit}
  className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">

<h1 className="text-3xl font-semibold">
  Contact Form
</h1>

<div className="flex flex-col gap-1 w-full">
<label htmlFor="name" className="text-xl font-semibold">Name</label>
<input
className="bg-transparent border px-2 py-1 rounded-sm"
type="text" 
id="name"
name="name"
placeholder="Enter your name"
onChange={handleUserInput}
/>


</div>


<div className="flex flex-col gap-1 w-full">
<label htmlFor="email" className="text-xl font-semibold">Email</label>
<input
className="bg-transparent border px-2 py-1 rounded-sm"
type="text" 
id="email"
name="email"
placeholder="Enter your Email"
onChange={handleUserInput}
/>


</div>


<div className="flex flex-col gap-1 w-full">
<label htmlFor="message" className="text-xl font-semibold">Message</label>
<textarea
className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"

id="message"
name="message"
placeholder="Enter your Message"
onChange={handleUserInput}
/>


</div>

<button type="submit"
 className="w-full bg-yellow-600 hover:bg-yellow-500 text-lg font-semibold transition-all ease-in-out rounded-sm cursor-pointer py-2">
Submit
</button>

</form>

  </div>
   </HomeLayout>
)
}

export default Contact