import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TabBar from "./Partial/TabBar";
import Dropdown from "./Partial/Dropdown";
import axios from "../utils/axios";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Partial/Loader";
function Person() {
  const navigate = useNavigate();
  console.log("this is navigate in preson for reversing the step", navigate)
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      console.log(data);
      if (data.results.length > 0) {
        setPerson((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHandler = () => {
    if (person.length == 0) {
      getPerson();
    } else {
      setPerson([]);
      setPage(1);
      getPerson();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);
  return person ? (
    <div className="px-[3%] w-full h-full mt-5">
      <div className="w-full flex item-center justify-between">
        <h1 className="text-zinc-500 font-semibold text-2xl select-none mt-4">
          <i
            class="ri-arrow-left-line hover:text-[#6556CD]"
            onClick={() => navigate(-1)}
          ></i>{" "}
          Popular Peoples
        </h1>
        <div className="flex w-[80%]">
          <TabBar height="4vh" width="" padding="0" />
          <Dropdown
            title="Category"
            options={["airing_today", "on_the_air", "popular", "top_rated"]}
            fun={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="allCards w-full h-full  bg-[#1f1E24]">
        <InfiniteScroll
          loader={<h1>Loading</h1>}
          next={getPerson}
          hasMore={hasmore}
          dataLength={person.length}
        >
          <Cards data={person} ishide={"yes"} title="person" />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Person;
