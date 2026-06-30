import React from 'react'
import { Link } from 'react-router-dom'


const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'
const MovieCard = ({movie}) => {
  return (
    <Link key={movie.id} to={`/movie/${movie.id}`} state={movie} >
    <div className='w-full bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 '>
        <img className='h-96 w-full  object-cover' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
        <div className='p-2'>
            <h3 className='text-sm font-semibold truncate'>{movie.title}</h3>
        </div>
    </div>
    </Link>
  )
}

export default MovieCard