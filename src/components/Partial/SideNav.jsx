import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-screen border-r-2 p-10 border-zinc-400">
      <h1 className="text-2xl text-white font-bold">
        <i class="ri-tv-fill text-[#6556CD] text-2xl mr-1"></i>
        <span className="text-xl">Detailed</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-2xl text-white mb-5 font-semibold mt-10 ">
          New Feed
        </h1>

        <Link  to= '/trending' className="p-5 hover:bg-[#6556CD] hover:font-bold duration-300 rounded-lg text-xl text-white">
          <i class="ri-fire-fill mr-2"></i>
          <span>Trending</span>
        </Link>

        <Link to='/popular' className="p-5 hover:bg-[#6556CD]  hover:font-bold duration-300 rounded-lg text-xl text-white">
          <i class="ri-bard-fill mr-2"></i>
          <span>Popular</span>
        </Link>
        <Link to='/movies' className="p-5 hover:bg-[#6556CD] hover:font-bold duration-300 rounded-lg text-xl text-white">
          <i class="ri-movie-2-fill mr-2"></i>
          <span>Movies</span>
        </Link>
        <Link to='/tvshow' className="p-5 hover:bg-[#6556CD] hover:font-bold duration-300 rounded-lg text-xl text-white ">
          <i class="ri-tv-2-line mr-2"></i>
          <span>TV Shows</span>
        </Link>
        <Link to='/person' className="p-5 hover:bg-[#6556CD] hover:font-bold duration-300 rounded-lg text-xl text-white">
          <i class="ri-team-fill mr-2"></i>
          <span>People</span>
        </Link>
      </nav>

      <hr className="border-none bg-zinc-400 h-[1px]" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-2xl text-white mb-5 font-semibold mt-10 ">
          Website Information
        </h1>

        <Link className="p-5 hover:bg-[#6556CD] hover:font-bold duration-300 rounded-lg text-xl text-white">
          <i class="ri-information-fill mr-2"></i>
          <span>About</span>
        </Link>

        <Link className="p-5 hover:bg-[#6556CD]  hover:font-bold duration-300 rounded-lg text-xl text-white">
          <i class="ri-phone-fill mr-2"></i>
          <span>Contact</span>
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
