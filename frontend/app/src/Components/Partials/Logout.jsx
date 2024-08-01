import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

export default function Logout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); 
    navigate('/login'); 
  };

  return (
    <li className="navbar-item account-menu px-0 mt-2">
      <Link
        to="#"
        onClick={handleLogout}
        className="navbar-link d-flex rounded shadow align-items-center py-2 px-4"
      >
        <span className="h4 mb-0">
          <i className="uil uil-signout"></i>
        </span>
        <h6 className="mb-0 ms-2 ">Déconnexion</h6>
      </Link>
    </li>
  );
}
