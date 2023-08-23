'use client'

import React from 'react'
import Icon from '../factories/icon'

function Search({ onClick, search, setSearch }) {

    return (
        <div className="relative max-w-md w-full flex flex-row">
            <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg">
                <label htmlFor='inp' className="pr-5 flex items-center rounded-r-full bg-white border border-slate-200 border-l-0 px-2 text-sm transition-colors duration-300 peer-focus:border-b-sky-400 peer-focus:bg-sky-400 peer-focus:text-white">
                    <Icon icon={"search"} onClick={onClick} />
                </label>
                <input className="pl-5 peer w-full rounded-l-full border border-slate-200 border-r-0 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-#000-400 focus:border-r-1 focus:outline-none"
                    id='inp'
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyUp={event => {
                        if (event.key === 'Enter') {
                            onClick()
                        }
                    }} />
            </div>
        </div>
    )
}

export default Search