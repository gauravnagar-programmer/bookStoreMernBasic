import { useState } from "react"
import axios from "axios"
import Maincard from "./Maincard"
import { Link } from "react-router-dom"
import { useEffect } from "react"
const PrivateBooks = () => {

  const [username,setUsername] = useState('gaurav')

  const [books,setBooks] = useState([])

  useEffect(() =>{
    const getBook = async() =>{
      try {
        const res = await axios.get('http://localhost:3500/books/paid')
        setBooks(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])


  return (
    
      
       <div className=" mt-20 md:mt-27 space-y-10">
       
       <div className=" space-y-5 flex flex-col items-center">
        <h1 className="font-bold text-3xl md:text-4xl">Welcome 
          <span className="capitalize text-blue-500  "> {username}</span> 
          , We're are happy to see you !</h1>
          <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quo, nobis totam alias excepturi magni maxime rerum explicabo possimus optio quaerat modi, error velit dolorem est perspiciatis. Labore, numquam itaque!</p>
          <Link to="/">
          <button className="px-4 py-2 text-white rounded-md bg-blue-500 font-bold">Back</button>
          </Link>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          books.map((book) =>{
            return(

              <Maincard key={book.id} item={book}/>
            )
          })
        }
       </div>
        
      </div>

  )


 }

export default PrivateBooks