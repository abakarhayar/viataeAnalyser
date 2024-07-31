import React from "react";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <>
      <section className="section">
        <div className="container mt-100 mt-60">
          <div className="rounded bg-primary bg-gradient p-lg-5 p-4">
            <div className="row align-items-end">
              <div className="col-md-8">
                <div className="section-title text-md-start text-center">
                  <h4 className="title mb-3 text-white title-dark">
                    En moins de cinq minutes vous allez savoir exactement ce que
                    vaut votre CV et comment l’améliorer !
                  </h4>
                </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0">
                <div className="text-md-end text-center">
                  <Link to="/login" className="btn btn-light">
                    Lancez l'analyse <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
