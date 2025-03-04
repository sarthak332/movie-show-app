import { Route, Routes } from 'react-router-dom'
// import viteLogo from '/vite.svg'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import Person from './components/Person'
import MovieDetail from './components/Partial/MovieDetail'
import TvshowsDetail from './components/Partial/TvshowsDetail'
import PeopleDetail from './components/Partial/PeopleDetail'
import Trailer from './components/Partial/Trailer'
function App() {
  return (
    <div className='w-screen h-full flex bg-[#1f1E24]'>
         <Routes >
          <Route path='/' element = {<Home/>}/>
          <Route path='/trending' element = {<Trending/>}/>
          <Route path='/popular'  element = {<Popular/>}/>
          <Route path='/movies' element = {<Movies/>}/>
          <Route path='/movie/details/:id' element = {<MovieDetail/>}>
              <Route path='/movie/details/:id/trailer' element = {<Trailer/>}/>
          </Route>
          <Route path='/tvshow' element = {<TvShows/>}/>
          <Route path='/tv/details/:id' element = {<TvshowsDetail/>}>
               <Route path='/tv/details/:id/trailer' element = {<Trailer/>}/>
          </Route>
          <Route path='/person' element = {<Person/>}/>
          <Route path='/person/details/:id' element = {<PeopleDetail/>}/>
         </Routes>
    </div>
  )
}

export default App
