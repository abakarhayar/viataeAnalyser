import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <>
      <section className="bg-home pb-5 pb-sm-0 d-flex align-items-center bg-linear-gradient-primary">
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-md-6">
              <div
                className="title-heading me-lg-4 wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <h1 className="heading fw-bold mb-3">
                  Vérifiez la qualité de votre CV
                  <span className="text-primary"> par IA</span> <br />
                  Obtenez un <span className="text-primary">
                    Score de CV
                  </span>{" "}
                  Gratuit
                </h1>
                <p className="para-desc text-muted">
                  Mettez toutes les chances de votre côté en éliminant les
                  potentielles erreurs de votre CV.
                </p>
                <div className="col-12 pt-4">
                  <Link to="/login" className="btn btn-outline-primary">
                    Commencez<i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="position-relative ms-lg-5">
                <div
                  className="bg-half-260 overflow-hidden rounded-md shadow-md jarallax"
                  data-jarallax
                  data-speed="0.5"
                  style={{
                    background: `url('assets/images/dist/about.jpg')`,
                  }}
                >
                  <div className="py-lg-5 py-md-0 py-5"></div>
                </div>

                <div
                  className="modern-saas-absolute-left wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="card">
                    <div className="features feature-primary d-flex justify-content-between align-items-center rounded shadow p-3">
                      <div className="d-flex align-items-center">
                        <div className="icon bg-soft-primary text-center rounded-pill">
                          <i className="uil uil-usd-circle fs-4 mb-0"></i>
                        </div>
                        <div className="flex-1 ms-3">
                          <h6 className="mb-0 text-muted">Augmentez</h6>
                          <p className="fs-5 text-dark fw-bold mb-0">
                            Vorte salaire
                          </p>
                        </div>
                      </div>

                      <span className="text-success ms-4">
                        <i className="uil uil-arrow-growth"></i> 100%
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="modern-saas-absolute-right wow animate__animated animate__fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="card rounded shadow">
                    <div className="p-3">
                      <h5>Mettez vos compétences </h5>

                      <div className="progress-box mt-2">
                        <h6 className="title fw-normal text-muted">
                          En valeur
                        </h6>
                        <div className="progress">
                          <div
                            className="progress-bar position-relative bg-primary"
                            style={{ width: "84%" }}
                          >
                            <div className="progress-value d-block text-muted h6 mt-1">
                              84%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="position-absolute top-0 start-0 translate-middle z-index-m-1">
                  <img
                    src="assets/images/shapes/dots.svg"
                    className="avatar avatar-xl-large"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
