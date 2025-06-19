import React, { useEffect, useState } from 'react'
import SideNav from './Partial/SideNav'
import TabBar from './Partial/TabBar'
import axios from '../utils/axios'
import Header from './Partial/Header'
import HorizantalCards from './Partial/HorizantalCards'
import Dropdown from './Partial/Dropdown'
import Loader from './Partial/Loader'
const Home = () => {
  const [wallpaper, setWallaper] = useState(null);
  const [trending, settrending] = useState([]);
  const [category, setCategory] = useState("tv");
  const getHeadder =  async () => {
    try {
      console.log("this is my home section")
      const {data} = await axios.get(`/trending/all/day`);
      console.log("this is my", data);
      let random = Math.floor(Math.random() * data.results.length);
      setWallaper(data.results[random]);
    } 
    catch (error) {
      console.log("data not found",error);
    }
  }
 
  const getTrending=async()=>{
      try{
        const {data} = await axios.get(`/trending/${category}/day`);
        console.log("this is ", data.results);
        settrending(data.results);
      }
      catch(error){
        console.log(error);
      }
  }


  useEffect(()=>{
  getHeadder();
  getTrending();
  }, [category]);
  return wallpaper ? (
      <>
      <SideNav/>
      <div className='w-[80%] h-full'>
        <TabBar height ="10vh" />
        <Header data={wallpaper}/>

        <div className='w-full text-lg text-zinc-300 font-semibold p-2 m-2 flex justify-between '>
             <h3 className='mt-3 ml-3'>Trending</h3>
             <Dropdown title = "Filter" options = {["tv", "movie","all"]} fun = {(e)=>setCategory(e.target.value)}/>
        </div>
        <HorizantalCards cards = {trending}  ishide={"none"}/>
      </div>
      </>
  ): <Loader/>
  ;
};

export default Home;