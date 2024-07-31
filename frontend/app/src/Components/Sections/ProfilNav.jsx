import React from "react";

export default function ProfilNav() {
  return (
    <>
      
       
            <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
              <div className="sidebar sticky-bar p-4 rounded shadow">
             
                <div className="widget mt-4">
                  <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                    <li className="navbar-item account-menu px-0">
                      <a
                        href="account-profile.html"
                        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                      >
                        <span className="h4 mb-0">
                          <i className="uil uil-dashboard"></i>
                        </span>
                        <h6 className="mb-0 ms-2">Mon Profile</h6>
                      </a>
                    </li>

                    <li className="navbar-item account-menu px-0 mt-2">
                      <a
                        href="account-members.html"
                        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                      >
                        <span className="h4 mb-0">
                          <i className="uil uil-users-alt"></i>
                        </span>
                        <h6 className="mb-0 ms-2">Mes CVs</h6>
                      </a>
                    </li>
 
                    <li className="navbar-item account-menu px-0 mt-2">
                      <a
                        href="account-setting.html"
                        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                      >
                        <span className="h4 mb-0">
                          <i className="uil uil-setting"></i>
                        </span>
                        <h6 className="mb-0 ms-2">Settings</h6>
                      </a>
                    </li>

                    <li className="navbar-item account-menu px-0 mt-2">
                      <a
                        href="auth-login-three.html"
                        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
                      >
                        <span className="h4 mb-0">
                          <i className="uil uil-dashboard"></i>
                        </span>
                        <h6 className="mb-0 ms-2">Logout</h6>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      
    </>
  );
}
