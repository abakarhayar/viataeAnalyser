import React from "react";
import { Link } from "react-router-dom";

export default function MyProfil() {
  return (
    <>
      <div className="col-lg-8 col-12">
        <div className="border-bottom pb-4">
          <h5>Ange Bérenger</h5>
          <p className="text-muted mb-0">
            I have started my career as a trainee and prove my self and achieve
            all the milestone with good guidance and reach up to the project
            manager. In this journey, I understand all the procedure which make
            me a good developer, team leader, and a project manager.
          </p>
        </div>

        <div className="border-bottom pb-4">
          <div className="row">
            <div className="col-md-6 mt-4">
              <h5> Informations :</h5>
              <div className="mt-4">
                <div className="d-flex align-items-center">
                  <i
                    data-feather="mail"
                    className="fea icon-ex-md text-muted me-3"
                  ></i>
                  <div className="flex-1">
                    <h6 className="text-primary mb-0">Email :</h6>
                    <Link to="mailto:admin@example.com" className="text-muted">
                      ange@gmail.com
                    </Link>
                  </div>
                </div>
             
             
                <div className="d-flex align-items-center mt-3">
                  <i
                    data-feather="phone"
                    className="fea icon-ex-md text-muted me-3"
                  ></i>
                  <div className="flex-1">
                    <h6 className="text-primary mb-0">Num. Tél :</h6>
                    <a href="" className="text-muted">
                      xxx
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 pt-2 pt-sm-0">

              <div className="d-flex align-items-center mt-3">
                  <i
                    data-feather="gift"
                    className="fea icon-ex-md text-muted me-3"
                  ></i>
                  <div className="flex-1">
                    <h6 className="text-primary mb-0">Date de naissance:</h6>
                    <p className="text-muted mb-0">31/12/1999</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <i
                    data-feather="map-pin"
                    className="fea icon-ex-md text-muted me-3"
                  ></i>
                  <div className="flex-1">
                    <h6 className="text-primary mb-0">Adresse :</h6>
                    <p className="text-muted mb-0">Lyon, France</p>
                   
                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
