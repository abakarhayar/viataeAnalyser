import React from 'react'
import ProfilHeader from '../../Sections/ProfilHeader'
import ProfilNav from '../../Partials/ProfilNav'
import MyDashboard from '../../Sections/MyDashboard'

export default function Dashboard() {
  return (
    <>
    <ProfilHeader />
    <section className="section mt-60">
      <div className="container mt-lg-3">
        <div className="row">
          <ProfilNav />
          <MyDashboard />
        </div>
      </div>
    </section>
  </>
  )
}
