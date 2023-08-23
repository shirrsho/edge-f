import React from 'react'

function Sidebar() {
  return (
    <div className="bg-white w-full md:w-60 flex flex-col md:flex z-5" id="sideNav">
        <nav className="fixed">
        <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:text-gray-800" href="#">
            <i className="fas fa-home mr-2"></i>New Agreement
        </a>
        <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:text-gray-800" href="#">
            <i className="fas fa-file-alt mr-2"></i>New Batch
        </a>
        <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:text-gray-800" href="#">
            <i className="fas fa-users mr-2"></i>Update
        </a>
        </nav>
  </div>
  )
}

export default Sidebar