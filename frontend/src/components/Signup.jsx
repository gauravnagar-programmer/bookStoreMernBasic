import { useState } from "react"
import { Link } from "react-router-dom"
import { errorMessage, successMessage } from "../utils/Message"
import axios from "axios"
import { ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"


const Signup = () => {
      const navigate = useNavigate()

  const [inputValue,setInputValue] = useState({
    name : "",
    email : "",
    password  : ""
  })

  const handleInput = (e) =>{
    const {name,value} = e.target

    setInputValue((prev) =>{
      return{
        ...prev,
        [name] : value

      
    }}
      
    
    )}

    const handleSubmit = async (e) =>{
      e.preventDefault()

      const {email,password,name} = inputValue

      if(!email,!password,!name){
        errorMessage('All fields are required')
        return
      }

      

      try {
        const res = await axios.post('http://localhost:3500/user/signup',inputValue)
        
        const {message,success} = res.data
        if(success){
          successMessage(message)
          setTimeout(() => {
            successMessage('signup complete , please login')
           navigate('/user/login')

          }, 1500);
        }
        
      } catch (error) {
        const message = error.response?.data?.message || "something went wrong"
        errorMessage(message)
      }
      

    }

  return (
    <div   className="h-screen flex items-center flex-col md:mt-20   justify-center px-5 mt-5 ">
      <h1 className="text-4xl font-bold my-10">Register From</h1>
      <div className=" md:px-5 w-sm  px-8 relative border rounded-md border-gray-500 py-10 md:py-15  ">
        
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-3.5 top-5">
            ✕
          </Link>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 ">
          <div className="flex flex-col space-y-2 ">
            <label className="label">Name</label>
            <input
            value={inputValue.name}
            onChange={handleInput}
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col space-y-2 ">
            <label className="label">Email</label>
            <input
            value={inputValue.email}
            onChange={handleInput}
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="label">Password</label>
            <input
            value={inputValue.password}
            onChange={handleInput}
              name="password"
              autoComplete="current-password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn border-none btn-neutral mt-4 text-white bg-blue-500">
            Signup
          </button>
        </form>
        <p className="mt-3 text-right mr-5 text-[10px] md:text-[12px]">
          Have An Account 
          <Link  to="/user/login" className="underline text-blue-500 ml-3 ">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Signup