import React from 'react'
import ProfilHeader from '../../Sections/ProfilHeader'
import ProfilNav from '../../Partials/ProfilNav'
import UserList from '../../Sections/UserList'

export default function User() {
  return (
    <>
    <>
<ProfilHeader />
    <section className="section mt-60">
    <div className="container mt-lg-3">
      <div className="row">
      <ProfilNav />
      <UserList/>
      </div>
   
    </div>
      </section>
    </>
    </>
  )
}
