import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title">Notre Equipe</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card team team-primary text-center bg-transparent border-0">
                <div className="card-body p-0">
                  <div className="position-relative">
                    <img
                      src="https://media.licdn.com/dms/image/D4E03AQHiE4YoNZxkIw/profile-displayphoto-shrink_400_400/0/1703530091184?e=1727913600&v=beta&t=cmlTEu-606WUnEOC3mQgMpihVHkgy2wCRsU3q8gGAmY"
                      className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                      alt=""
                    />
                    <ul className="list-unstyled mb-0 team-icon">
                      <li className="list-inline-item">
                        <Link
                          to="https://www.linkedin.com/in/bera-kod/"
                          className="btn btn-primary btn-pills btn-sm btn-icon"
                        >
                          <i className="fab fa-linkedin icons"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body py-3 px-0 content">
                    <h5 className="mb-0">
                      <Link to="" className="name text-dark">
                        Bérenger AKODO 
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card team team-primary text-center bg-transparent border-0">
                <div className="card-body p-0">
                  <div className="position-relative">
                    <img
                      src="https://media.licdn.com/dms/image/D4E35AQGncuXZKwpmBg/profile-framedphoto-shrink_400_400/0/1691588950223?e=1723014000&v=beta&t=UoBrpJH79WJyY60IkdPHjyEhKnMwaCU0JBunodAgScY"
                      className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                      alt=""
                    />
                    <ul className="list-unstyled mb-0 team-icon">
                      <li className="list-inline-item">
                        <Link
                          to="https://www.linkedin.com/in/etienne-vacher-254605282/"
                          className="btn btn-primary btn-pills btn-sm btn-icon"
                        >
                          <i className="fab fa-linkedin icons"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body py-3 px-0 content">
                    <h5 className="mb-0">
                      <Link to="" className="name text-dark">
                      Etienne VACHER
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card team team-primary text-center bg-transparent border-0">
                <div className="card-body p-0">
                  <div className="position-relative">
                    <img
                      src="https://media.licdn.com/dms/image/D4E03AQHzFY9LxfRQ4Q/profile-displayphoto-shrink_400_400/0/1700944112934?e=1727913600&v=beta&t=ltK72q18eq4MrVe3y1TbQrV73CXCPqRtJSTaDdaJmvk"
                      className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                      alt=""
                    />
                    <ul className="list-unstyled mb-0 team-icon">
                      <li className="list-inline-item">
                        <Link
                          to="https://www.linkedin.com/in/abakar-hadjar-adam-2b06031aa/"
                          className="btn btn-primary btn-pills btn-sm btn-icon"
                        >
                          <i className="fab fa-linkedin icons"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body py-3 px-0 content">
                    <h5 className="mb-0">
                      <Link to="" className="name text-dark">
                       Hadjar ABAKAR
                      </Link>
                    </h5>
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
