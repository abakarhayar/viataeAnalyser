import React from "react";
import { Link } from "react-router-dom";

export default function ProfilNav() {
  return (
    <>
      
       
            <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
              <div className="sidebar sticky-bar p-4 rounded shadow">
             
                <div className="widget mt-4">
                  <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                    <li className="navbar-item account-menu px-0">
                      <Link
                        to="/profil"
                        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                      >
                        <span className="h4 mb-0">
                          <i className="uil uil-dashboard"></i>
                        </span>
                        <h6 className="mb-0 ms-2">Mon Profile</h6>
                      </Link>
                    </li>

                    <li className="navbar-item account-menu px-0 mt-2">
                      <Link
                        to="/mycv"
                        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                      >
                        <span className="h4 mb-0">
                          <i className="uil uil-document-info"></i>
                        </span>
                        <h6 className="mb-0 ms-2">Mes CVs</h6>
                      </Link>
                    </li>
 
                    <li className="navbar-item account-menu px-0 mt-2">
                      <Link
                        to="/settings"
                        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                      >
                        <span className="h4 mb-0">
                          <i className="uil uil-setting"></i>
                        </span>
                        <h6 className="mb-0 ms-2">Paramètres</h6>
                      </Link>
                    </li>

                    <li className="navbar-item account-menu px-0 mt-2">
                      <Link
                        to=""
                        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                      >
                        <span className="h4 mb-0">
                          <i className="uil uil-signout"></i>
                        </span>
                        <h6 className="mb-0 ms-2">Déconnexion</h6>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      
    </>
  );
}
