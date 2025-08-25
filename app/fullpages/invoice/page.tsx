import React from 'react'
import "./style.css"
import Hero from './components/Hero'
import DashboardPreview from './components/dashprev'
import Users from './components/users'
import Services from './components/services'
import Flow from './components/flow'

const FullPage = () => {
  return (
    <div className="w-full bg-white parent">
      <Hero/>
      <DashboardPreview/>
      <Users/>
      <Services/>
      <Flow/>
    </div>
  )
}

export default FullPage