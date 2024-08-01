import React from 'react'
import { Link } from 'react-router-dom'
import ProfilHeader from '../../Sections/ProfilHeader'
import ProfilNav from '../../Partials/ProfilNav'
import SubmitApplication from '../../Sections/SubmitApplication'

export default function Candidate() {
  return (
    <>
    <ProfilHeader />
        <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
          <ProfilNav />
          <SubmitApplication />
          </div>
       
        </div>
          </section>
        </>
  )
}
