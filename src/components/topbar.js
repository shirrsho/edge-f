import React from 'react'
import QueryBar from './querybar'
import Link from 'next/link'

function Topbar() {
  return (
    <div className="bg-white shadow w-full p-5 pl-20 pr-20 fixed flex items-center justify-between z-50">
      <h3>Edge</h3>
      <QueryBar/>
      <Link href={'/admin'} className="py-2 px-6 rounded-full text-red-600 btn border border-red-600">Admin</Link>
    </div>
  )
}

export default Topbar