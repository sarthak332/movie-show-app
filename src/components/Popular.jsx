import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./Partial/Dropdown";
import { Navigate, useNavigate } from "react-router-dom";
import TabBar from "./Partial/TabBar";
import Loader from "./Partial/Loader";
const Popular = () => {
  const [category, setCategory] = useState("movie");
//   const [duration, setDuration] = useState("day");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  const navigate = useNavigate();
  const getPopular = async () => {
    try{
        const {data} = await axios.get( `/${category}/popular?page=${page}`);
        if(data.results.length > 0){
        setPopular((prev) => [...prev, ...data.results]);;
        setPage(page+1);
        console.log(data);
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
      if(popular.length === 0){
        getPopular();
      }
      else{
        setPopular([]);
        setPage(1);
        getPopular();
      }
   }
  useEffect(()=>{
    refHandler();
  },[category])
  return popular ? (
  <div className="px-[3%] w-full h-full mt-5">
          <div className="w-full flex item-center justify-between">
        <h1 className="text-zinc-500 font-semibold text-2xl select-none mt-4">
          <i
            class="ri-arrow-left-line hover:text-[#6556CD]"
            onClick={() => navigate(-1)}
          ></i>{" "}
          Popular <small className="text-sm text-zinc-400">({category})</small>
        </h1>
        <div className="flex w-[80%]">
          <TabBar height="4vh" width="" padding="0" />

          <Dropdown
            title="Category"
            options={["movie", "tv"]}
            fun={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
     <div className="allCards w-full h-full  bg-[#1f1E24]">
        <InfiniteScroll
          loader={<h1>Loading</h1>}
          next={getPopular}
          hasMore={hasmore}
          dataLength={popular.length}
        >
          <Cards data={popular} ishide={"none"} title="movie"/>
        </InfiniteScroll>
      </div>
  </div>) : <Loader/>;
};

export default Popular;
