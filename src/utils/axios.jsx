import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGRiNWY2ZmVkZTBmZThhOWQ1OTJmYTM0OGYxODE2MyIsIm5iZiI6MTczMzU0NjE0My41ODIsInN1YiI6IjY3NTNkMDlmODBlNWI4ZjBhNzU2NWE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Hu5IpSINFufGuWxxX6wObfsiLF80e_kGuvzjuCVXlw'
      },
});
export default instance;