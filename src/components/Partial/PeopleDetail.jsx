import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPerson, removeperson } from "../../Store/Action/personAction";
import Dropdown from "./Dropdown";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import HorizantalCards from "./HorizantalCards";
import Loader from "./Loader";
function PeopleDetail() {
  const info = useSelector((state) => state.person.info);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [category, setCategory] = useState("movie");
  console.log("this is a pathname", pathname);
  const { id } = useParams();
  useEffect(() => {
    dispatch(asyncPerson(id));
    return () => {
      dispatch(removeperson);
    };
  }, [id]);
  return info ? (
    <div className="w-screen px-[10%]  h-[175vh] bg-[#1f1E24]">
      <nav className="w-full text-zinc-100 gap-10 text-xl   mt-5">
        <Link
          class="ri-arrow-left-line hover:text-[#6556CD]"
          onClick={() => navigate(-1)}
        ></Link>
      </nav>
      <div className="flex gap-20">
        <div className="w-[20%] flex flex-col mt-[5%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover h-[35vh]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="border-none bg-zinc-500 h-[2px] mt-7 mb-5 " />
          <div className="flex flex-row gap-3">
            <a
              target="_blank"
              href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i class="ri-earth-fill text-white text-2xl"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i class="ri-facebook-circle-fill text-white text-2xl"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i class="ri-instagram-line text-white text-2xl"></i>
            </a>

            <a
              target="_blank"
              href={`https://x.com/${info.externalid.twitter_id}`}
            >
              <i class="ri-twitter-x-line text-white text-2xl"></i>
            </a>
          </div>
          <h1 className="text-2xl text-zinc-400 font-semibold tracking-tighter my-5">
            Personal Information
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">
            Known For Department
          </h1>
          <h3 className=" text-zinc-400 ">
            {info.detail.known_for_department}
          </h3>
          <h2 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h2>
          <h3 className=" text-zinc-400 ">
            {info.detail.gender == 2 ? "Male" : "Female"}
          </h3>
          <h3 className="text-lg text-zinc-400 font-semibold mt-3">BirthDay</h3>
          <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>
          <h3 className="text-lg text-zinc-400 font-semibold mt-3">DeathDay</h3>
          <h1 className=" text-zinc-400">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>
          <h3 className="text-lg text-zinc-400 font-semibold mt-3">
            Place Of Birth
          </h3>
          <h1 className=" text-zinc-400 ">{info.detail.place_of_birth}</h1>
          <h3 className="text-lg text-zinc-400 font-semibold mt-3">
            also_known_as
          </h3>
          <h1 className=" text-zinc-400 ">
            {info.detail.also_known_as.join(",")}
          </h1>
        </div>
        <div className="text-zinc-400 w-[80%]">
          <h1 className="text-6xl text-zinc-400 font-black">
            {info.detail.name}
          </h1>
          {info.detail.biography && (
            <div>
                  <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                  Biography
                </h1>
                <p className=" text-zinc-400 my-3 ">{info.detail.biography}</p>
                </div>
          )}
    
          <h1 className="text-md text-zinc-400 font-semibold mb-5 mt-3">Know For</h1>
          <HorizantalCards cards={info.combinedCredits.cast} />

          <div className="flex justify-between my-3">
            <p className="text-zinc-400 font-semibold text-xl">Acting</p>
            <Dropdown
              title={category}
              options={["movie", "tv"]}
              fun={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="list-disc w-full h-[50vh] shadow- shadow-xl overflow-x-hidden overflow-y-auto shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 mt-5 p-5">
            {info[category + "Credits"].cast.map((item, index) => (
              <div className="cursor-pointer hover:text-white rounded">
                <Link to={`/${category}/details/${item.id}`} className="">
                  <li className="mb-2">
                    {item.title ||
                      item.original_name ||
                      item.original_title ||
                      item.name}
                  </li>
                  <span className="mb-2">
                    {item.character && `CharecterName : ${item.character}`}
                    
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default PeopleDetail;
