import React from 'react'
import { useLocation } from 'react-router-dom'

const CityWise = () => {
    const locations=useLocation()
    const shifting=locations.pathname.slice(1).split('-')[0]
    console.log(shifting)
  return (
    <div>CityWise</div>
  )
}

export default CityWise