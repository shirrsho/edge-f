'use client'
import React from 'react'
import Chart from 'react-google-charts'

function ComboChart({ data, options }) {
  return (
    <Chart
        chartType="ComboChart"
        width="100%"
        height="250px"
        data={data}
        options={options}
  />
  )
}

export default ComboChart