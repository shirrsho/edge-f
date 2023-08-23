import React from 'react'
import QueryBar from './querybar'

function Topbar() {
  return (
    <div className="bg-white shadow w-full p-5 fixed flex items-center justify-between z-50">
      <h3>Edge</h3>
      <QueryBar/>
      <button class="py-2 px-6 rounded-full text-white btn bg-red-500 hover:bg-red-600">Login</button>
    </div>
  )
}

export default Topbar