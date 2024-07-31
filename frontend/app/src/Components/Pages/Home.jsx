import React from 'react'
import HomeHeader from '../Sections/HomeHeader'
import Services from '../Sections/Services'
import Functionality from '../Sections/Functionality'
import Team from '../Sections/Team'
import Cta from '../Sections/Cta'

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Services />
      <Functionality />
      <Team />
      <Cta />
    </div>
  )
}
