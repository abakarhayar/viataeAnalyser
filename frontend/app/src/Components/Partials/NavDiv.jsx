import React from "react";
import { Link } from "react-router-dom";

export default function NavDiv() {
  return (
    <div>
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          <div id="navigation">
            <ul className="navigation-menu">
              <li>
              <Link to="/" className="sub-menu-item">
              Accueil
                </Link>
                 
              </li>
              <li>
                <Link to="/login" className="sub-menu-item">
                Connexion
                </Link>
              </li>
              <li>
                <Link to="/signup" className="sub-menu-item">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="sub-menu-item">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
