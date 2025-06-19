import React, { useEffect } from "react";
import { asyncfun, removemovie } from "../../Store/Action/MovieAction";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import HorizantalCards from "./HorizantalCards";
import Loader from "./Loader";
function MovieDetail() {
  const info = useSelector((state) => state.movie.info);
  console.log(info);
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  console.log(pathname)
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    dispatch(asyncfun(id));
    return () => {
      dispatch(removemovie);
    };
  }, [id]);
  return info ? (
    <div
      className="w-full h-full px-[10%] relative"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)),
      url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* part-1 navigation*/}
      <nav className="w-full text-zinc-100 gap-10 text-xl flex item-center h-[10vh] mt-5">
        <Link
          class="ri-arrow-left-line hover:text-[#6556CD]"
          onClick={() => navigate(-1)}
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-fill"></i>
        </a>
        <a target="_blank"
          href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i class="ri-earth-fill"></i>
        </a>

        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>
          imdb
        </a>
      </nav>

      {/* part  poster and details */}

      <div className="w-full flex">
        
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover h-[50vh]"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white">

             <h3 className="text-6xl font-black ">
               {info.detail.title ||
                    info.detail.original_name ||
                    info.detail.original_title ||
                    info.detail.name}
                    
                    <small className="text-xl font-bold text-zinc-300">({info.detail.release_date.split("-")[0]})</small>
             </h3>

              <div className="flex items-center gap-x-3 mt-3 mb-5">

               <span className= "bg-yellow-700 w-[5vh] h-[5vh] rounded-full text-xl font-semibold text-white flex justify-center item-center"> 
                <span className="mt-2 text-lg">{(info.detail.vote_average*10).toFixed()}</span>
                  <span className="mb-1 text-lg"> %</span>
                </span>

                <h1 className="w-[60px] font-semibold text-2xl leading-6">User Score</h1>

                <h1>{info.detail.release_date}</h1>

                <h1>
                  {info.detail.genres.map((g)=>g.name).join(",")}
                </h1>  

                <h1>{info.detail.runtime}min</h1>
               </div>   
              
                <h1 className="text-xl font-semibold italic text-zinc-200">{info.detail.tagline}</h1>

                <h1 className="text-xl mt-5 mb-3">overview </h1>
                <p>{info.detail.overview}</p>

                <h1 className="text-xl mt-5 mb-3">Movie Translated </h1>
                <p className="mb-7">{info.translation.join(" ")}</p>

                <Link to={`${pathname}/trailer`} className="bg-[#6556CD] p-5 rounded-lg">
                <i class="text-xl ri-play-fill mr-3"></i>
                   Play Trailer
                </Link>
              
        </div>
        
      </div>

      {/* part 03 Avilable on Platform*/}

      <div className="w-[80%]  flex flex-col gap-y-5 mt-10 mb-10 ">
    
        {info.watchprovider && info.watchprovider.flatrate && (
          <div className="text-white flex gap-x-10 items-center">
            <h3>Avilable on Platform</h3>
            {info.watchprovider.flatrate.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchprovider && info.watchprovider.rent && (
          <div className="text-white flex gap-x-10 items-center">
            <h3>Avilable to Rent</h3>
            {info.watchprovider.rent.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        
        {info.watchprovider && info.watchprovider.buy && (
          <div className="text-white flex gap-x-10 items-center">
            <h3>Avilable to Buy</h3>
            {info.watchprovider.buy.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt="hello"
              />
            ))}
          </div>
        )}

      </div>

      {/* part 04 recomendations and similar */}
      <hr className="border-none bg-zinc-500 h-[2px] mt-10 mb-5 " />
      <h1 className="font-bold text-3xl text-white mb-5">Recommendation & similar Stuff</h1>
      <HorizantalCards title={"movie"} cards = {info.recommendation.length > 0 ? info.recommendation : info.similar}/>
      
        <Outlet/>
      
    </div>
  ) : (
       <Loader/>
  );
}

export default MovieDetail;
