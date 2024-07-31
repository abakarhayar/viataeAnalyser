import React from 'react'
import ProfilHeader from '../../Sections/ProfilHeader'
import ProfilNav from '../../Partials/ProfilNav'
import MyProfil from '../../Sections/MyProfil'

export default function Profil() {
  return (
    <>
    <ProfilHeader />
    <section className="section mt-60">
    <div className="container mt-lg-3">
      <div className="row">
      <ProfilNav />
      <MyProfil />
      </div>
   
    </div>
      </section>
    </>
  )
}
