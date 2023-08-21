'use client'
import React from 'react'
import Chart from 'react-google-charts'

function PieChart({ data, options }) {
  return (
    <Chart
        chartType="PieChart"
        width="100%"
        height="250px"
        data={data}
        options={options}
  />
  )
}

export default PieChart