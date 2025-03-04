import React from 'react'
import { Link } from 'react-router-dom'

const HorizantalCards = ({cards, title}) => {
  console.log("this data is present in horizantal cards",cards)
  return (
    <div className='w-full h-[48vh] flex  overflow-y-hidden scrollbar-hide ml-3'>
            {cards.map((item ,index)=> (
           <Link to={`/${item.media_type || title}/details/${item.id}`} className='min-w-[15%] h-full mr-5' key={index}>
              <img className='w-full h-[46%] object-cover rounded-lg' src={item.backdrop_path || item.profile_path ?  `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}` : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} alt="" />
              <h1 className='text-lg text-white mt-2 font-bold p-2 tracking-tight max-h-[15%]'>{(
              item.title || 
              item.original_name || 
              item.original_title ||
              item.name).slice(0,15)}</h1>
               <p className=' text-white font-semibold text-xs text-wrap mt-1 ml-2'>{item.overview.slice(0,50)}..<Link className='text-zinc-300 '>more</Link></p>
            </Link>
             ))}
    </div>
  )
}

export default HorizantalCards;