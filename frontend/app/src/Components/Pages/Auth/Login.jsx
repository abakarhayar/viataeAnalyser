import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
      navigate("/profil"); 
    } catch (error) {
       console.error(error);
      if (error.response) {
        setError("Identifiants incorrects. Veuillez réessayer.");
      }
    }
  };

  return (
    <>
      <section className="bg-home d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="me-lg-5">
                <img
                  src="assets/images/dist/login.svg"
                  className="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="card login-page shadow rounded border-0">
                <div className="card-body">
                  <h4 className="card-title text-center">Connexion</h4>
                  {error && <p className="text-danger text-center">{error}</p>}
                  <form className="login-form mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
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

                      <div className="col-lg-12">
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

                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button className="btn btn-primary">Connexion</button>
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Vous n'avez pas de compte ?
                          </small>{" "}
                          <Link to="/signup" className="text-dark fw-bold">
                            S'inscrire
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
    </>
  );
}
