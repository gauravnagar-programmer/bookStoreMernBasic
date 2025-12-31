import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PrivateBooks from "./components/PrivateBooks"
import Layout from "./components/Layout/Layout"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact/Contact"
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify"
import Login from "./components/Login"
import Authlayout from "./components/Layout/Authlayout"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      
      <Route path='/user/books' element={
        <ProtectedRoute>
          <PrivateBooks/>
        </ProtectedRoute> 
      } />
      </Route>
      <Route path="/user" element={<Authlayout/>}>
      <Route path="/user/signup" element={<Signup/>}/>
      </Route>
     
        
      <Route path="/user/login" element={<Login/>}/>
      <Route path="/user/contact" element={<Contact/>}/>

    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App