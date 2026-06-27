import React from 'react'
import { useLocation } from 'react-router-dom'

const MovieDetails = () => {

            const {state} = useLocation() 
            console.log(state)

  return (
    <div className='bg-black  text-white py-14 px-10 h-full md:h-screen'>
        <button onClick={()=>{
            history.back()
        }} className="bg-red-700 mb-10 cursor-pointer px-4 py-2  rounded-lg text-2xl">Back</button>
       
       <div className='flex w-full max-w-5xl md:flex-row flex-col   gap-8'>
        <div className='bg-gray-900 rounded-xl overflow-hidden h-100 w-full max-w-2xs'>
       <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${state.poster_path}`} />
        </div>
       <div>
        <h2 className='mb-2'>Movie Name : <span className='ml-2'>  {state.title}</span></h2>
        <h2 className='mb-2'>Release Date :<span className='ml-2'>{state["release_date"]}</span></h2>
        <h2 className='mb-2'>OverView :<span className='ml-2'>{state.overview}</span></h2>
        <h2>Popularity: <span className='ml-2'>{state.popularity}</span></h2>
       </div>
        </div>
    </div>
  )
}

export default MovieDetails