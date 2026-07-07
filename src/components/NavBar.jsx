import React from 'react'

const NavBar = ({setSearch}) => {
  return (
    <div className='bg-black gap-4 flex items-center justify-between px-6 py-4 text-white'>
        <h1 className='text-red-500 text-[23px] md:text-2xl font-bold'>MovieHub</h1>
        <input onChange={(e)=>{
            setSearch(e.target.value)
        }} placeholder='Search movies...' className='bg-white outline-none rounded-md w-28 text-[14px] md:text-xl md:w-44 text-black px-3 py-1
         '/>
    </div>
  )
}

export default NavBar