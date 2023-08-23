'use client'
import React from 'react'
import Chart from 'react-google-charts'

function ChartFactory({ type, title, data, options}) {
    return(
        <div className="flex-1 bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-500 text-lg font-semibold pb-1">{title}</h2>
            <div className="my-1"></div>
            <div className="bg-gradient-to-r from-cyan-300 to-gray-800 h-px mb-6"></div>
            <div className="chart-container relative h-fit w-full">
                <Chart
                    chartType={type}
                    width="100%"
                    height="250px"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
}

export default ChartFactory