import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Wrapper from "../Wrapper"

const Authlayout = () => {
  return (
    <Wrapper>
    <Navbar/>
    <Outlet/>
    </Wrapper>
  )
}

export default Authlayout