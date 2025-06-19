export {removeperson} from "../Reducers/personSlics";
import { loadperson } from "../Reducers/personSlics";
import axios from "../../utils/axios";

export const asyncPerson = (id) => async(dispatch, getSate) =>{
    try{
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`); 
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
        let ultimateDetail = {
            detail : detail.data,
            externalid : externalid.data,
            combinedCredits : combinedCredits.data,
            movieCredits : movieCredits.data,
            tvCredits : tvCredits.data
       }
       console.log("hello ji",ultimateDetail);
         dispatch(loadperson(ultimateDetail));
    }
    catch(error){
        console.log(error);
    }
} 