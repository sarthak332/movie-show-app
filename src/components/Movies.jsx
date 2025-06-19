import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./Partial/Dropdown";
import { Navigate, useNavigate } from "react-router-dom";
import TabBar from "./Partial/TabBar";
import Loader from "./Partial/Loader";
function Movies() {

      const [category, setCategory] = useState("now_playing");
      const [movies, setMovies] = useState([]);
      const [page, setPage] = useState(1);
      const [hasmore, setHasmore] = useState(true);
      const navigate = useNavigate();
      const getMovies = async () => {
        try{
            const {data} = await axios.get( `/movie/${category}?page=${page}`);
            // console.log(data);
            if(data.results.length > 0){
            setMovies((prev) => [...prev, ...data.results]);;
            setPage(page+1);
            }
            else{
                setHasmore(false);
            }
        }
        catch(error){
            console.log(error);
        }
      };
       const refHandler=()=>{
          if(movies.length === 0){
            getMovies();
          }
          else{
            setMovies([]);
            setPage(1);
            getMovies();
          }
       }
      useEffect(()=>{
        refHandler();
      },[category])

  return movies ? (
    <div className="px-[3%] w-full h-full mt-5">
    <div className="w-full flex item-center justify-between">
      <h1 className="text-zinc-500 font-semibold text-2xl select-none mt-4">
        <i
          class="ri-arrow-left-line hover:text-[#6556CD]"
          onClick={() => navigate(-1)}
        ></i>{" "}
        Movies <small className="text-sm text-zinc-400">({category})</small>
      </h1>
      <div className="flex w-[80%]">
        <TabBar height="4vh" width="" padding="0" />

        <Dropdown
          title="Category"
          options={["popular", "top_rated", "upcoming", "now_playing"]}
          fun={(e) => setCategory(e.target.value)}
        />

        <div className="w-[2%]"></div>
      </div>
    </div>

    <div className="allCards w-full h-full  bg-[#1f1E24]">
      <InfiniteScroll
        loader={<h1>Loading</h1>}
        next={getMovies}
        hasMore={hasmore}
        dataLength={movies.length}
      >
        <Cards data={movies} ishide={"none"}  title="movie" />
      </InfiniteScroll>
    </div>
  </div>
  ) : <Loader/>;
}

export default Movies;
