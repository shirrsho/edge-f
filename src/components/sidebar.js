import Icon from '@/factories/icon'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className="bg-white w-full md:w-60 flex flex-col md:flex z-5">
        <nav className="fixed">
            <Link href={'/admin/agreement'} className="z-10 flex gap-2 text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:text-gray-800">
                <Icon icon='agreement' color='#555'/>New Agreement
            </Link>
            <Link href={'/admin/company'} className="z-10 flex gap-2 text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:text-gray-800">
                <Icon icon='agreement' color='#555'/>Add a Company
            </Link>
            <Link href={'/admin/agreement'} className="z-10 flex gap-2 text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:text-gray-800">
                <Icon icon='batch' color='#555'/>New Batch
            </Link>
            <Link href={'/admin/agreement'} className="z-10 flex gap-2 text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:text-gray-800">
                <Icon icon='edit' color='#555'/>Update
            </Link>
        </nav>
  </div>
  )
}

export default Sidebar