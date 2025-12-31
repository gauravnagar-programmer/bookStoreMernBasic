import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Login from "./Login";
import { ToastContainer } from "react-toastify";
function Navbar() {
  const navbar = (
    <>
      <li ><Link to="/">Home</Link></li>
      <li><Link to="/user/books">Books</Link></li>
      <li><Link to="/user/contact">Contact</Link></li>
      <li><Link to="#">About</Link></li>
    </>
  );

  const [sticky,setSticky] = useState(false)
  
  useEffect(()=>{

    const handleSticky = () =>{
      if(window.scrollY > 0){
        setSticky(true)
      }else{
        setSticky(false)
      }
    }

    window.addEventListener('scroll',handleSticky)

    return(()=>{ window.removeEventListener('scroll',handleSticky)})

  },[])

  return (
    <>
  <div className={`navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-10 ${sticky ? "bg-blue-300" : "bg-base-100"}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {navbar}
      
      
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">MyBookStore</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/user/books">Books</Link></li>
      <li><Link to="/user/contact">Contact</Link></li>
      <li><Link to="#">Help</Link></li>
      
      
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/user/login"  className="btn bg-black text-white border-none">Login</Link>
  </div>
</div>
        <ToastContainer/>
    </>
  );
}

export default Navbar;
