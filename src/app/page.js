
export default function Home() {

  return (
    <div className="flex flex-col h-screen bg-gray-100">
    <div className="bg-white shadow w-full pt-5 pb-5 fixed flex items-center justify-center">
            {/* <div className="flex items-center">
                <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-28 h-18 mr-2"/>
                <h2 className="font-bold text-xl">Edge</h2>
            </div> */}
            <div className="relative max-w-md w-full flex space-x-5">
                  <div className="absolute top-1 left-2 inline-flex items-center p-2">
                      <i className="fas fa-search text-gray-400"></i>
                  </div>
                <select className="w-full h-10 pl-5 pr-5 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Queries...">
                  <option value="volvo">Companies with valid Agreement</option>
                  <option value="volvo">All Running Batches</option>
                  <option value="volvo">All Recruited Trainees</option>
                </select>
                <button className="bg-gray-800 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-full">
                        Execute
                  </button>
            </div>
            {/* <div className="md:hidden flex items-center">
                <button id="menuBtn">
                    <i className="fas fa-bars text-gray-500 text-lg"></i>
                </button>
            </div> */}
    </div>

    <div className="flex-1 flex flex-wrap pt-20">
        <div className="bg-white w-full md:w-60 flex flex-col md:flex" id="sideNav">
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

        <div className="flex-1 p-4 w-full md:w-1/2">

            <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 className="text-gray-500 text-lg font-semibold pb-1">Companies</h2>
                    <div className="my-1"></div>
                    <div className="bg-gradient-to-r from-cyan-300 to-gray-800 h-px mb-6"></div>
                    <div className="chart-container relative h-38 w-full">
                        <canvas id="usersChart"></canvas>
                    </div>
                </div>

                <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 className="text-gray-500 text-lg font-semibold pb-1">Trained</h2>
                    <div className="my-1"></div>
                    <div className="bg-gradient-to-r from-cyan-300 to-gray-800 h-px mb-6"></div>
                    <div className="chart-container" style={{position: 'relative', height:'150px', width:'100%'}}>
                        <canvas id="commercesChart"></canvas>
                    </div>
                </div>
            </div>
            <div className="relative max-w-md w-full mt-10">
                  <div className="absolute top-1 left-2 inline-flex items-center p-2">
                      <i className="fas fa-search text-gray-400"></i>
                  </div>
                <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Search..."/>
            </div>
            <div className="mt-8 bg-white p-4 shadow rounded-lg">
                <h2 className="text-gray-500 text-lg font-semibold pb-4">Due Payment</h2>
                <div className="my-1"></div>
                <div className="bg-gradient-to-r from-cyan-300 to-gray-800 h-px mb-6"></div>
                <table className="w-full table-auto text-sm">
                    <thead>
                        <tr className="text-sm leading-normal">
                            <th className="py-4 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Sl</th>
                            <th className="py-4 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Company</th>
                            <th className="py-4 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Batch</th>
                            <th className="py-4 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-4 px-4 border-b border-grey-light">1</td>
                            <td className="py-4 px-4 border-b border-grey-light">Company</td>
                            <td className="py-4 px-4 border-b border-grey-light">Batch-6789</td>
                            <td className="py-4 px-4 border-b border-grey-light">Submitted</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-4 px-4 border-b border-grey-light">2</td>
                            <td className="py-4 px-4 border-b border-grey-light">Company</td>
                            <td className="py-4 px-4 border-b border-grey-light">Batch-6789</td>
                            <td className="py-4 px-4 border-b border-grey-light">Submitted</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-4 px-4 border-b border-grey-light">3</td>
                            <td className="py-4 px-4 border-b border-grey-light">Company</td>
                            <td className="py-4 px-4 border-b border-grey-light">Batch-6789</td>
                            <td className="py-4 px-4 border-b border-grey-light">Submitted</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-4 px-4 border-b border-grey-light">4</td>
                            <td className="py-4 px-4 border-b border-grey-light">Company</td>
                            <td className="py-4 px-4 border-b border-grey-light">Batch-6789</td>
                            <td className="py-4 px-4 border-b border-grey-light">Submitted</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-4 px-4 border-b border-grey-light">5</td>
                            <td className="py-4 px-4 border-b border-grey-light">Company</td>
                            <td className="py-4 px-4 border-b border-grey-light">Batch-6789</td>
                            <td className="py-4 px-4 border-b border-grey-light">Submitted</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-right mt-4">
                    <button className="bg-gray-800 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                        More
                    </button>
                </div>
            </div>

            <div className="mt-8 bg-white p-4 shadow rounded-lg">
                <div className="bg-white p-4 rounded-md mt-4">
                    <h2 className="text-gray-500 text-lg font-semibold pb-4">Upcoming Deadlines</h2>
                    <div className="my-1"></div>
                    <div className="bg-gradient-to-r from-cyan-300 to-gray-800 h-px mb-6"></div>
                    <table className="w-full table-auto text-sm">
                        <thead>
                            <tr className="text-sm leading-normal">
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Sl</th>
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Company</th>
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Batch</th>
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Event</th>
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light">1</td>
                                <td className="py-2 px-4 border-b border-grey-light">Company</td>
                                <td className="py-2 px-4 border-b border-grey-light">Batch-24323</td>
                                <td className="py-2 px-4 border-b border-grey-light">Mid Evaluation</td>
                                <td className="py-2 px-4 border-b border-grey-light">02/09/2024</td>
                            </tr>
                        <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light">2</td>
                                <td className="py-2 px-4 border-b border-grey-light">RealTech</td>
                                <td className="py-2 px-4 border-b border-grey-light">Batch-24323</td>
                                <td className="py-2 px-4 border-b border-grey-light">Final Evaluation</td>
                                <td className="py-2 px-4 border-b border-grey-light">04/09/2024</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light">3</td>
                                <td className="py-2 px-4 border-b border-grey-light">Company</td>
                                <td className="py-2 px-4 border-b border-grey-light">Batch-24323</td>
                                <td className="py-2 px-4 border-b border-grey-light">Mid Evaluation</td>
                                <td className="py-2 px-4 border-b border-grey-light">02/09/2024</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light">4</td>
                                <td className="py-2 px-4 border-b border-grey-light">Company</td>
                                <td className="py-2 px-4 border-b border-grey-light">Batch-24323</td>
                                <td className="py-2 px-4 border-b border-grey-light">Mid Evaluation</td>
                                <td className="py-2 px-4 border-b border-grey-light">02/09/2024</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="text-right mt-4">
                                                <div className="text-right mt-4">
                            <button className="bg-gray-800 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
