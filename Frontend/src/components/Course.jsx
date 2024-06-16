/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";
const Course = () => {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    const getBooks = async()=>{
      try{
        const res = await axios.get('http://localhost:3000/book');
        // console.log(res.data)
        setBooks(res.data)
      }catch(e){
        console.log(e);
      }
    }
    getBooks();
  },[])
  return (
    <>
    <div className="max-w-screen px-3 md:px-6 md:py-4 dark:bg-slate-900 dark:text-white">
    <div className="w-full text-center pt-28 justify-center items-center dark:bg-slate-900 dark:text-white">
        <h1 className="text-2xl md:text-4xl">We're delighted to have you{" "} <span className="text-pink-500 font-semibold">Here! :)</span></h1>
        <p className="text-xl mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, consequuntur eum atque dolorum porro esse adipisci facere? Libero ullam nesciunt quos alias dignissimos temporibus officiis quis quae ipsum fugit! Officiis unde temporibus.</p>
        <Link to="/">
        <button className="bg-pink-500 text-slate-100 rounded-md px-4 py-2 mt-3 hover:bg-pink-400 duration-300 transition-all ease-in-out">Back</button>
        </Link>
    </div>

    <div className="grid mt-12 md:grid-cols-4 grid-cols-1 m-0">
    {books.map((data)=>{
        return (
            <Cards
            item={data}
            key={data.id}
            />
        )
        // console.log(data);
    })}
    </div>
    </div>
    </>
  )
}

export default Course