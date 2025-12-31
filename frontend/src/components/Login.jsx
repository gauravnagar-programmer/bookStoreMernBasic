import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { successMessage, errorMessage } from "../utils/Message";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = inputValue;

    if (!email || !password) {
      errorMessage("All fields are required");
      return;
    }

    try {

          const res = await axios.post(
      "http://localhost:3500/user/login",
      inputValue
    );
    const { message, success, jwtToken, username } = res.data;
    console.log(res.data)

    if (success) {
      successMessage(message);
      localStorage.setItem('token',jwtToken)
      localStorage.setItem('loggedInuser',username)
      setTimeout(() => {
        navigate('/')
      }, 1500);
      
    }
      
    } catch (error) {
      const message = error.response?.data?.message  || "something went wrong"
      errorMessage(message)
    }


  };

  return (
    <div  className="flex items-center flex-col justify-center h-screen  px-5 ">
        <h1 className="text-4xl font-bold my-5 text-center ">Login Form</h1>
      <div className="border-gray-500 border w-sm px-5 py-7 rounded-sm relative">
        <form>
          {/* if there is a button in form, it will close the modal */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
        </form>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6  ">
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
              type="password"
              autoComplete="current-password"
              className="input w-full"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-neutral border-0 mt-4 text-white bg-blue-500"
          >
            Login
          </button>
        </form>
        <p className="mt-3 text-right mr-5 text-[10px] md:text-[12px]">
          Don't have any account
          <Link to="/user/signup" className="underline text-blue-500 ml-3 ">
            Signup
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
