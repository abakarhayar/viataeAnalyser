import React from 'react'
import ProfilHeader from '../../Sections/ProfilHeader'
import ProfilNav from '../../Sections/ProfilNav'
import MySetting from '../../Sections/MySetting'

export default function Setting() {
  return (
    <>
<ProfilHeader />
    <section className="section mt-60">
    <div className="container mt-lg-3">
      <div className="row">
      <ProfilNav />
      <MySetting />
      </div>
   
    </div>
      </section>
    </>
  )
}
