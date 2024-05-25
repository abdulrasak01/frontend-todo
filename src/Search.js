import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <div className='m-5'>
        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text"
               id='search'
               placeholder='Search Items'
               className='border border-gray-300 rounded-full p-5'
               value={search}
               onChange={(e)=>setSearch(e.target.value)}
        />
</form>
    </div>
  )
}

export default Search