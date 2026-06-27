import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { getMovies } from '../services/api'
import MoviesList from '../components/MoviesList'

const Home = () => {
    const [movies,setMovies] = useState([])
    const [search,setSearch]= useState('')
    useEffect(()=>{
       loadMovies()
    },[search])
    
    const loadMovies = async ()=>{
                const data  = await getMovies(search)
                setMovies(data.results)
                console.log(data.results)
    }
  return (
    <div className='bg-black min-h-screen text-white'>
        <NavBar setSearch={setSearch}/>
        <MoviesList movies={movies}/>
        
    </div>
  )
}

export default Home
