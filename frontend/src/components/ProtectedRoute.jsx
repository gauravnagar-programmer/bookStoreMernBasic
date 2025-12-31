import { useEffect } from "react"
import { Navigate } from "react-router-dom"
const ProtectedRoute = ({children}) => {
    
      const token = localStorage.getItem("token")
    
      if(!token || token === "") {
        return <Navigate to="/user/login" replace/>
      }
  

 return children;
}

export default ProtectedRoute