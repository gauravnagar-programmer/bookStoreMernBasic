import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Wrapper from "../Wrapper"
import { ToastContainer } from "react-toastify"

const Layout = () => {
  return (
    <Wrapper>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <ToastContainer/>
    </Wrapper>
  )
}

export default Layout