import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import AuthContext from "../../Context/AuthContext";

export default function ProfilNav() {
  const { user } = useContext(AuthContext); 

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
                  <h6 className="mb-0 ms-2">Mon Profil</h6>
                </Link>
              </li>

              

              <li className="navbar-item account-menu px-0 mt-2">
                <Link
                  to="/candidate"
                  className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                >
                  <span className="h4 mb-0">
                    <i className="uil uil-document-info"></i>
                  </span>
                  <h6 className="mb-0 ms-2">Candidature</h6>
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
                  <h6 className="mb-0 ms-2">Cvthèque</h6>
                </Link>
              </li>

              {user && (user.role === "admin" || user.role === "rh") && (
                <li className="navbar-item account-menu px-0 mt-2">
                  <Link
                    to="/searchcandidate"
                    className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span className="h4 mb-0">
                      <i className="uil uil-search"></i>
                    </span>
                    <h6 className="mb-0 ms-2">Recherche candidat</h6>
                  </Link>
                </li>
              )}
              {user && user.role === "admin" && (
                <li className="navbar-item account-menu px-0 mt-2">
                  <Link
                    to="/userlist"
                    className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                  >
                    <span className="h4 mb-0">
                      <i className="uil uil-users-alt"></i>
                    </span>
                    <h6 className="mb-0 ms-2">Liste des utilisateurs</h6>
                  </Link>
                </li>
              )}

         
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

              <Logout />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
