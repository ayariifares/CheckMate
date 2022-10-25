import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movieList,deletCard,seen,search}) => {
    console.log(movieList,"movieList")
  return (
    <div>
        {
            movieList.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase().trim()) )
            .map(
                (e)=>(<MovieCard movie={e} deletCard={deletCard} seen={seen} />)
                )
        }
  </div>
  )
}

export default MovieList