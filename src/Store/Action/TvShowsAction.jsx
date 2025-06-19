export {removetv} from "../Reducers/tvSlice";
import {loadtv} from "../Reducers/tvSlice";
import axios from "../../utils/axios";

export const asyncTv = (id) => async(dispatch, getSate) =>{
    try{
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendation = await axios.get(`/tv/${id}/recommendations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const watchprovider = await axios.get(`/tv/${id}/watch/providers`);
        const translation = await axios.get(`/tv/${id}/translations`); 
        let ultimateDetail = {
            detail : detail.data,
            externalid : externalid.data,
            recommendation : recommendation.data.results,
            videos : videos.data.results.find(m => m.type === "Trailer"),
            similar : similar.data.results,
            translation : translation.data.translations.map((item)=>item.english_name),
            watchprovider : watchprovider.data.results.IN
       }
       console.log("hello ji",ultimateDetail);
         dispatch(loadtv(ultimateDetail));
    }
    catch(error){
        console.log(error);
    }
} 