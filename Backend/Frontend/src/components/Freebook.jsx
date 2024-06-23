import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../components/Cards"
import { useEffect, useState } from 'react';
import axios from 'axios';

const Freebook = () => {
    // console.log(filterData);
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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const [book,setBook] = useState([]);
    useEffect(()=>{
      const getBooks = async()=>{
        try{
          const res = await axios.get("/book");
          const data = await res.data;
          const filterData = data.filter((books)=>books.category==="Free");
          setBook(filterData);
        }catch(err){
          console.log(err);
        }
      }
      getBooks();
    })
    return (
    <>
        <div className="max-w-screen px-2 md:px-6 md:mx-8 py-3 md:py-4 mx-4 md:mt-6 mt-6 dark:bg-slate-900 dark:text-white">
            <div>
            <h1 className="font-bold text-xl mt-4 md:mt-5 pb-2 md:pb-3">Free Offered Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam vero ducimus, voluptatibus dolor dicta laborum obcaecati nobis soluta voluptate.</p>
            </div>
        
    <div>
        <Slider {...settings}>
          {book.map((data)=>{ 
              return(
            <Cards
            item = {data}
            key = {data.id}
            />
            )
          })}
      </Slider>
     </div>
</div>
    </>
  )
}

export default Freebook