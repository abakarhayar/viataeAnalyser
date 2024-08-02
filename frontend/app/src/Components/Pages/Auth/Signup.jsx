import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useApi } from "../../../Context/ApiContext";

export default function SignUp() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    role: "candidat", // Default role
    password: "",
    password2: "",
    is_active: true,
    is_staff: false,
  });

  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate(); 
  const { apiUrl } = useApi(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      setPasswordError("Les mots de passe ne correspondent pas.");
      return;
    }

    setPasswordError(null);

    try {
      const response = await axios.post(`${apiUrl}/inscription/`, formData);
      navigate("/login");
    } catch (error) {
      console.error(error);
      if (error.response) {
        setError(error.response.data);
      }
    }
  };

  return (
    <section className="bg-auth-home d-table w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6">
            <div className="me-lg-5">
              <img
                src="assets/images/dist/signup.svg"
                className="img-fluid d-block mx-auto"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="card shadow rounded border-0">
              <div className="card-body">
                <h4 className="card-title text-center">Création de compte</h4>
                <form className="login-form mt-4" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Nom <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i className="fea icon-sm icons uil uil-user"></i>
                          <input
                            type="text"
                            className="form-control ps-5"
                            placeholder="Nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Prénom <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i className="fea icon-sm icons uil uil-user-check"></i>
                          <input
                            type="text"
                            className="form-control ps-5"
                            placeholder="Prénom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i className="fea icon-sm icons uil uil-fast-mail"></i>
                          <input
                            type="email"
                            className="form-control ps-5"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Num. Tel <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i className="fea icon-sm icons uil uil-mobile-android"></i>
                          <input
                            type="text"
                            className="form-control ps-5"
                            placeholder="Num. Tel"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Rôle <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i className="fea icon-sm icons uil uil-users-alt"></i>
                          <select
                            className="form-control ps-5"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                          >
                            <option value="candidat">Candidat</option>
                            <option value="rh">RH</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Mot de passe <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i className="fea icon-sm icons uil uil-key-skeleton"></i>
                          <input
                            type="password"
                            className="form-control ps-5"
                            placeholder="Mot de passe"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Confirmer Mot de passe <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i className="fea icon-sm icons uil uil-key-skeleton-alt"></i>
                          <input
                            type="password"
                            className="form-control ps-5"
                            placeholder="Confirmer Mot de passe"
                            name="password2"
                            value={formData.password2}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    {passwordError && (
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="alert alert-danger" role="alert">
                            {passwordError}
                          </div>
                        </div>
                      </div>
                    )}
                    {error && (
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="alert alert-danger" role="alert">
                            {JSON.stringify(error)}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="col-md-12">
                      <div className="d-grid">
                        <button className="btn btn-primary" type="submit">Inscription</button>
                      </div>
                    </div>
                    <div className="mx-auto">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">Vous avez déjà un compte ?</small>{" "}
                        <Link to="/login" className="text-dark fw-bold">
                          Se connecter
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
