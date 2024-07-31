import React from "react";
import { Link } from "react-router-dom";

export default function ProfilHeader() {
  return (
    <>
      <section
        className="bg-profile d-table w-100"
        style={{
          background: "url('assets/images/dist/bg.png') center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="card public-profile border-0 rounded shadow"
                style={{ zIndex: 1 }}
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-2 col-md-3 text-md-start text-center"></div>

                    <div className="col-lg-10 col-md-9">
                      <div className="row align-items-end">
                        <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                          <h3 className="title mb-0">Ange Bérenger</h3>
                          <small className="text-muted h6 me-2">Candidat</small>
                        </div>
                        <div className="col-md-5 text-md-end text-center">
                          <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item">
                              <Link
                                to="mailto:admin@example.com"
                                className="rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Email"
                              >
                                <i className="uil uil-envelope align-middle"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
