import List from "../List.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Maincard from "./Maincard";
import axios from "axios";
import { useState,useEffect } from "react";


const Freebooks = () => {

  const [books,setBooks] = useState([])

  useEffect(() =>{
      const getBook = async() =>{
        try {
          const res = await axios.get('http://localhost:3500/books/free')
          setBooks(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      getBook()
      console.log(books)
    },[])

  const FilteredBooks = List.filter((free) => free.category === "free");
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="md:mt-7 mt-10 space-y-10">
        <div className="space-y-3">
          <h1 className="font-bold ">Top free Books</h1>
          <p className="font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt magni
            nam repellat nisi pariatur distinctio quam vel blanditiis! Sint,
            delectus!
          </p>
        </div>
        <div className="slider-container ">
          <Slider {...settings} >

          {
            books.map((book)=>{
              return(
                <div key={book.id} className="px-2">
      <Maincard item={book} />
    </div> 
              )
            })
          }

            
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebooks;
