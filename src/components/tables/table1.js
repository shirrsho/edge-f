import React from 'react'

function Table1() {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-500 text-lg font-semibold pb-4">Due Payments</h2>
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
  )
}

export default Table1