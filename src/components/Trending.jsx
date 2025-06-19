import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TabBar from "./Partial/TabBar";
import Dropdown from "./Partial/Dropdown";
import axios from "../utils/axios";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Partial/Loader";
const Trending = () => {
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
         console.log("this is my data", data.results)
      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshhandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      //  ye condition isiiliye lagai hai ke jab category ya 
      // duration change ho to trending khali ho jaye aur page be default 1 set h jaye
      setPage(1);
      settrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshhandler();
  }, [category, duration]);

  const navigate = useNavigate();
  return trending ?  (
    <div className="px-[3%] w-full h-full mt-5">
      <div className="w-full flex item-center justify-between">
        <h1 className="text-zinc-500 font-semibold text-2xl select-none mt-4">
          <i
            class="ri-arrow-left-line hover:text-[#6556CD]"
            onClick={() => navigate(-1)}
          ></i>{" "}
          Trending
        </h1>
        <div className="flex w-[80%]">
          <TabBar height="4vh" width="" padding="0" />

          <Dropdown
            title="Category"
            options={["all", "movie", "tv"]}
            fun={(e) => setCategory(e.target.value)}
          />

          <div className="w-[2%]"></div>

          <Dropdown
            title="Duration"
            options={["week", "day"]}
            fun={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <div className="allCards w-full h-full  bg-[#1f1E24]">
        <InfiniteScroll
          loader={<h1>Loading</h1>}
          next={getTrending}
          hasMore={hasmore}
          dataLength={trending.length}
        >
          <Cards data={trending}  title ={category}/>
        </InfiniteScroll>
      </div>
    </div>
  ) : <Loader/>;
};

export default Trending;
