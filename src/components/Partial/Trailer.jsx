import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import NotFound from './NotFound';
function Trailer() {
    const navigate = useNavigate();
    const {pathname} = useLocation(); 
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector(state=>state[category].info.videos);
    console.log(ytvideo);
  return (
    <div className="text-white w-screen z-[100] h-screen bg-[rgb(0,0,0,0.4)] flex items-center justify-center absolute top-0 left-0">
        {ytvideo ? ( <ReactPlayer
        controls
        height={700}
        width={1300}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />) : <NotFound/>}
      <div
        class="ri-close-fill hover:text-[#6556CD] text-3xl text-white mb-[45%] ml-[2%]"
        onClick={() => navigate(-1)}
      ></div>
    </div>
  );
}

export default Trailer