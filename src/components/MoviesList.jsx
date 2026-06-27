import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-5 p-4 gap-6 '>
{
    movies.map((movie)=>(
     movie.poster_path? <MovieCard movie={movie}/>:''
    ))
}
    </div>
  )
}

export default MoviesList