'use client'
import React from 'react'
import Icon from '@/factories/icon'
import Select from 'react-select'

function QueryBar() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
        ]
    return (
    <div className="relative max-w-md w-full flex space-x-5 z-10 space-y-2">
    {/* <select className="w-full h-10 pl-5 pr-5 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" placeholder="Queries...">
        <option value="volvo">Select a Query</option>
        <option value="volvo">Companies with valid Agreement</option>
        <option value="volvo">All Running Batches</option>
        <option value="volvo">All Recruited Trainees</option>
    </select>
    <button className="bg-gray-800 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-full">
        Execute
    </button> */}
    <Select
        options={options}
        placeholder='Select Query...'
        className='w-full'
    />
    <div title="Execute Query!"><Icon icon='execute' color='#555' size={20}/></div>
    </div>
    )
}

export default QueryBar