import React from 'react';
import { Link } from 'react-router-dom';

function Header({data}) {
  console.log("this is header data",data.media_type)
  return (
    <div
    style={{
      background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), 
      url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
      backgroundSize: 'cover',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat'
        
    }}
    className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className='w-[70%] text-5xl font-black text-white'>{
      data.title || 
      data.original_name || 
      data.original_title ||
      data.name}</h1>

      <p className='w-[70%] text-white mt-3'>{data.overview.slice(0,200)}..<Link to={`${data.media_type}/details/${data.id}`} className='text-blue-400'>more</Link></p>

      <div className='flex flex-row'>

      <p className='text-2xl text-yellow-500 mt-2'>
      <i class="ri-megaphone-fill mr-2"></i>
      {data.release_date || "No Information"}
      </p>

      <p className='text-2xl text-yellow-500 ml-4 mt-2'>
      <i class="ri-album-fill mr-2"></i>
      {data.media_type.toUpperCase()}
      </p>
      </div>
      <Link to={`/${data.media_type}/details/trailer`} className='bg-[#6556CD] p-3 rounded mt-5 text-white'>Watch Trailer</Link>
    </div>
  );
}

export default Header;
