import React from "react";
import { Link } from "react-router-dom";

function Cards({data,title}) {
  // console.log("the tittle is", title);
  // console.log("this is data in my card",data);
  return(
    <div className="w-full h-full flex flex-wrap justify-center mt-[2%] gap-4">
      {data.map((item, index) => (
        <Link to= {`/${item.media_type||title}/details/${item.id}`}
          key={index}
          className="max-w-[20%]  md:w-[30%] sm:w-[45%] relative flex flex-col items-center  bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <div>
            <div className="relative w-full h-[30vh]">
              <img
                className="w-full h-full object-cover"
                src={item.backdrop_path || item.poster_path || item.profile_path?`https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.poster_path || item.profile_path
                }`:"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
                alt={item.title || item.name}
              />
              {/* when i am clicking on the page its visible on the card  initial set 0 and to black h=gradient*/}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-90 transition-opacity flex items-end p-4">
                <p className="text-white font-bold text-lg truncate">
                  {item.title ||
                    item.original_name ||
                    item.original_title ||
                    item.name}
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-white font-semibold text-xl truncate">
                {item.title ||
                  item.original_name ||
                  item.original_title ||
                  item.name}
              </p>

              {item.vote_average && (
                <div className=" absolute bg-yellow-800 right-[-0.5%] mt-24  w-[5vh] h-[5vh] rounded-full text-xl font-semibold text-white flex justify-center item-center top-24"> 
                <span className="mt-[6px] mr-[0.2px] text-left text-lg"> {(item.vote_average*10).toFixed()}</span>
                  <span className="mb-2 text-left text-lg"> %</span>
                </div>
              )}
              {/* <p className="text-gray-400 text-sm mt-2 line-clamp-3">
              {item.overview.slice(0,100)}..<Link className='text-zinc-300 '>more</Link>
              </p> */}

              <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                {item?.overview
                  ? `${item.overview.slice(0, 100)}..`
                  : ""}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;

// import React from 'react'

// function cards() {
//   return (
//     <div className='w-full  flex flex-wrap gap-3'>

//         <div className='cards w-[15%] p-3 bg-zinc-300 flex flex-col shadow-lg overflow-hidden transition-transform transform hover:scale-105 '>
//           <img src="tv-fill.svg" className='w-[85%] rounded flex-shrink-0 ' alt="" />
//           <p>Hello Duniya</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores ab itaque adipisci?</p>
//         </div>
//         <div className='cards w-[15%] p-3 bg-zinc-300 flex flex-col shadow-lg overflow-hidden transition-transform transform hover:scale-105 '>
//           <img src="tv-fill.svg" className='w-[85%] rounded flex-shrink-0 ' alt="" />
//           <p>Hello Duniya</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores ab itaque adipisci?</p>
//         </div>
//         <div className='cards w-[15%] p-3 bg-zinc-300 flex flex-col shadow-lg overflow-hidden transition-transform transform hover:scale-105 '>
//           <img src="tv-fill.svg" className='w-[85%] rounded flex-shrink-0 ' alt="" />
//           <p>Hello Duniya</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores ab itaque adipisci?</p>
//         </div>
//         <div className='cards w-[15%] p-3 bg-zinc-300 flex flex-col shadow-lg overflow-hidden transition-transform transform hover:scale-105 '>
//           <img src="tv-fill.svg" className='w-[85%] rounded flex-shrink-0 ' alt="" />
//           <p>Hello Duniya</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores ab itaque adipisci?</p>
//         </div>
//         <div className='cards w-[15%] p-3 bg-zinc-300 flex flex-col shadow-lg overflow-hidden transition-transform transform hover:scale-105 '>
//           <img src="tv-fill.svg" className='w-[85%] rounded flex-shrink-0 ' alt="" />
//           <p>Hello Duniya</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores ab itaque adipisci?</p>
//         </div>
//         <div className='cards w-[15%] p-3 bg-zinc-300 flex flex-col shadow-lg overflow-hidden transition-transform transform hover:scale-105 '>
//           <img src="tv-fill.svg" className='w-[85%] rounded flex-shrink-0 ' alt="" />
//           <p>Hello Duniya</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores ab itaque adipisci?</p>
//         </div>

//     </div>
//   )
// }

// export default cards
