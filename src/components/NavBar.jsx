import React from 'react'

const NavBar = ({setSearch}) => {
  return (
    <div className='bg-black flex items-center justify-between px-6 py-4 text-white'>
        <h1 className='text-red-500 text-2xl font-bold'>MovieHub</h1>
        <input onChange={(e)=>{
            setSearch(e.target.value)
        }} placeholder='Search movies...' className='bg-white outline-none rounded-md text-black px-3 py-1
         '/>
    </div>
  )
}

export default NavBar