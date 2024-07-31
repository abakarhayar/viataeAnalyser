import React from "react";
import { Link } from "react-router-dom";

export default function Functionality() {
  return (
    <>
      <section className="section overflow-hidden">
        <div className="container pb-5 mb-md-5 mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div
                className="section-title mb-4 pb-2 wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <h4 className="title mb-4">
                  Pourquoi tout le monde aime
                  <span className="fw-bold text-primary"> vitaeAnalizer ?</span>
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  L'outil qui vous aider à vous promouvoir
                  <span className="text-primary fw-bold"> vous-même</span>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-7 mt-4 pt-2">
              <div
                className="saas-feature-shape-left position-relative me-lg-5 wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
              >
                <img
                  src="assets/images/dist/task.svg"
                  className="img-fluid mx-auto d-block rounded shadow"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-5 mt-4 pt-2">
              <div
                className="section-title wow animate__animated animate__fadeInUp"
                data-wow-delay=".7s"
              >
                <h4 className="title mb-4">Pour le Candidat</h4>
                <p className="text-muted">
                  En quelques clics, vous allez vérifier que les informations
                  sur votre CV sont bien mises en avant, développées et
                  structurées.
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Aspect plus professionnel
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Vous aider à promouvoir vos compétences
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Sécurité et confidentialité
                  </li>
                </ul>
                <Link to="" className="mt-3 h6 text-primary">
                  Commencez <i className="uil uil-angle-right-b"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-5 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div
                className="section-title wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
              >
                <h1 className="title mb-3">Pour le responssable RH</h1>
                <p className="para-desc text-muted">
                  En quelques clics, vous allez gagner du temps dans le choix
                  des meilleurs candidats pour vos offres.
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Aspect plus professionnel
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Vous aider à promouvoir vous-même
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Sécurité et confidentialité
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-7 order-1 order-lg-2 wow animate__animated animate__fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="saas-feature-shape-right position-relative ms-lg-5">
                <img
                  src="assets/images/dist/2.jpg"
                  className="img-fluid mx-auto d-block rounded shadow"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
