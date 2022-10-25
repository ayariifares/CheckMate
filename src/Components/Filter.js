import React from 'react'

const Filter = ({setSearch}) => {
  return (
    <div>
        <input type='text' placeholder='Film name...' onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Filter