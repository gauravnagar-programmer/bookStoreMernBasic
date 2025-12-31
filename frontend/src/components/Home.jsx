import { ToastContainer } from "react-toastify"
import Freebooks from "./Freebooks"
import Herosection from "./Herosection"
import Wrapper from "./Wrapper"
import { useEffect, useState } from "react";

const Home = () => {

    const [username, setUsername] = useState("");


  useEffect(() =>{
    const user = localStorage.getItem('loggedInuser')
    setUsername(user)
    
  },[])

  
  return (
    <>
    <Wrapper>
    
    <Herosection name={username}/>
    <Freebooks/>
    
    </Wrapper>
    <ToastContainer/>
    </>
  )
}

export default Home