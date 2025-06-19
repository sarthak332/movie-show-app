import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
function TabBar({height, padding = "5"}) {
  const [query, setquery] = useState("");
  const [search, setSearch] = useState([]);
  const getSearch = async () => {
    try {
      const {data} = await axios.get(
        `/search/multi?query=${query}&api_key=c8db5f6fede0fe8a9d592fa348f18163`
      );
      console.log("this is upcoming data",data);
      setSearch(data.results)
      // console.log(data.results);
    } 
    catch (error) {
      console.log(error);
    }
  };
// this is called when query is change
  useEffect(() => {
    getSearch();    
  }, [query]);
  return (
    <div className={`w-[80%]  mx-auto h-[${height}]  flex justify-start items-center p-${padding} gap-4 relative `}>
      <i class="text-3xl ri-search-line text-zinc-400"></i>

{/*  */}
      <input
        type="text"
        onChange={(e) => setquery(e.target.value)}
        value={query}
        placeholder="Search Anything"
        className="w-[50%]  mx-10 p-5  outline-none text-xl text-zinc-200 rounded border-none bg-transparent"
      />

      {query && query.length > 0 && (
        <i
          onClick={() => setquery("")}
          class="ri-close-circle-fill text-3xl font-bold text-zinc-500"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] z-10 bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded ml-12">
        {search.map((item, index)=>(<Link to={`/${item.media_type}/details/${item.id}`} key={index} className="p-5 text-white bg-zinc-300 flex justify-start item-center border-b-2  text-xl hover:bg-slate-300 hover:text-black font-bold"> 
         <img className="w-[10vh] h-[10vh] rounded mr-3"
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`} alt="" />
         <span>{item.title || item.original_name || item.original_title || item.name}</span>
        </Link>))}
      </div>
    </div>
  );
}

export default TabBar;
