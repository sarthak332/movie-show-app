export {removemovie} from "../Reducers/moviesSlics";
import axios from "../../utils/axios";
import {loadmovie} from "../Reducers/moviesSlics";
export const asyncfun = (id) => async(dispatch, getState) =>{
    try{
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendation = await axios.get(`/movie/${id}/recommendations`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`);
        const translation = await axios.get(`/movie/${id}/translations`);
        console.log(translation)
        // console.log("this is watch provider",watchprovider.data.results.IN);
        console.log(videos)
        let ultimateDetail = {
             detail : detail.data,
             externalid : externalid.data,
             recommendation : recommendation.data.results,
             videos : videos.data.results.find(m => m.type === "Trailer"),
             similar : similar.data.results,
             translation : translation.data.translations.map((item)=>item.english_name),
             watchprovider : watchprovider.data.results.IN
        }
        console.log("this is my data that coming",ultimateDetail);
        dispatch(loadmovie(ultimateDetail));
    }
    catch(error){
        console.log(error);
    }
}; 