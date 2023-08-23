import React from 'react'
import './styles/login.css'
import Link from 'next/link'
import Icon from '@/factories/icon'

function Login() {
    return (
        <div className="md:h-screen bg-white relative flex flex-col justify-center items-center">
            <div className="md:border md:border-gray-300 bg-white md:shadow-lg shadow-none rounded p-10" >
                <div className="flex flex-col items-center space-y-3">
                    <h3>EDGE || IIT</h3>
                    <span className="text-2xl font-semi-bold leading-normal" >Sign in</span>
                    <p className="leading-normal">Use IIT provided Admin Code to login</p>
                </div>
                <form className="my-8">
                    <div className="relative mb-2">
                        <input id="code" className="w-full rounded px-3 border pt-3 pb-2 focus:outline-none input active:outline-none" type="text" autofocus />
                        <label for="code" className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text">Admin Code</label>
                    </div>
                    <div className="space-y-9 mt-10">
                        {/* <div>
                            <a className="text-sm font-bold text-blue-500" href="#">Forgot email?</a>
                        </div> */}
                        <div className="text-sm">
                            <p>Do not Not have code? Request one from the Authority.</p>
                            <a className="font-bold text-cyan-500" href="#">Request Code</a>
                        </div>
                        <div className="text-sm flex justify-between items-center float-right">
                            {/* <a className="font-bold text-blue-500 py-2 px-2 rounded -ml-2 hover:bg-blue-50 hover:text-blue-700" href="#">Create account</a> */}
                            <Link href={'/admin/dashboard'} className="py-2 px-6 rounded text-white btn bg-cyan-500 hover:bg-cyan-600">Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login