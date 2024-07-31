import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
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
                  <h4 className="card-title text-center">Créaiton de compte</h4>
                  <form className="login-form mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Nom <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <i className="fea icon-sm icons uil uil-user "></i>
                            <input
                              type="text"
                              className="form-control ps-5"
                              placeholder="Nom"
                              name="s"
                              required=""
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
                              name="s"
                              required=""
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
                              required=""
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
                              name="email"
                              required=""
                            />
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
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="d-grid">
                          <button className="btn btn-primary">Inscription</button>
                        </div>
                      </div>
                      <div className="mx-auto">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                          Vous avez déjà un compte ?
                          </small>{" "}
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
    </>
  );
}
