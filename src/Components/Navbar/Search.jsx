import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='flex items-center justify-center text-white border-b border-b-white'>
      <input type="search" name="" id=""  placeholder='Search...'
      className=' w-70 h-10 px-5  outline-none '
      />
      <CiSearch
      className='text-2xl cursor-pointer '

      />
    </div>
  )
}

export default Search
