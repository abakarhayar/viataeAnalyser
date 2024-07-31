import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import ProfilHeader from '../../Sections/ProfilHeader';
import ProfilNav from '../../Partials/ProfilNav';
import MyProfil from '../../Sections/MyProfil';
import AuthContext from '../../../Context/AuthContext';

export default function Profil() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

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
  );
}
