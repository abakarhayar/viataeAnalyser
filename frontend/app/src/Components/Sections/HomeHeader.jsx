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
                  </span>
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
