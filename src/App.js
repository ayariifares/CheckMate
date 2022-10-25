
import './App.css';
import MovieList from './Components/MovieList';
import {moviesData} from './MovieData'
import { useState } from 'react';
import AddMovieElement from './Components/AddMovieElement';
import Filter from './Components/Filter';
import {Routes,Route} from 'react-router-dom'
import UniqueElement from './Components/UniqueElement';
function App() {
  console.log(moviesData)
  const [movieList,setMovieList]=useState(moviesData)
  const [search,setSearch]=useState("")
  //function 
  const deletCard=(ID)=>{
    setMovieList(
      movieList.filter((e)=> e.id !== ID)
    )
  }

  const seen=(ID)=>{
    setMovieList(
      movieList.map((el)=> (el.id === ID ? {...el,isDone : !el.isDone }: el ) )
    )
  }

  const Add=(newMovie)=>{
    setMovieList(
      [...movieList,newMovie]
    )

  }

  return (
    <div className="App">

     <Filter setSearch={setSearch}/>
     <Routes>
      
     <Route path='/MovieList' element= { <MovieList  movieList={movieList}  deletCard={deletCard}  seen={seen} search={search}/>} />

     <Route path='/AddMovieElement' element={<AddMovieElement Add={Add}/>}/>
     <Route path='/MovieList/:ID' element={<UniqueElement Movie={moviesData}/>}/>
     </Routes>
    </div>
  );
}

export default App;
