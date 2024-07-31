import React from 'react'
import ProfilHeader from '../../Sections/ProfilHeader'
import ProfilNav from '../../Partials/ProfilNav'
import CvDiv from '../../Sections/CvDiv'

export default function MyCv() {
  return (
    <>
    <ProfilHeader />
    <section className="section mt-60">
    <div className="container mt-lg-3">
      <div className="row">
      <ProfilNav />
      <CvDiv />
      </div>
   
    </div>
      </section>
    </>
  )
}
