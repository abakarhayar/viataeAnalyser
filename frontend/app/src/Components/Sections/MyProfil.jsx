import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

export default function MyProfil() {
  const { user } = useContext(AuthContext);

  if (!user) return null; 
  return (
    <>
      <div className="col-lg-8 col-12">
        <div className="border-bottom pb-4">
          <h5>{user.nom} {user.prenom}</h5>
          <p className="text-muted mb-0">
            {user.description || "Description de l'utilisateur"}
          </p>
        </div>

        <div className="border-bottom pb-4">
          <div className="row">
            <div className="col-md-6 mt-4">
              <h5>Informations :</h5>
              <div className="mt-4">
                <div className="d-flex align-items-center">
                  <i
                    data-feather="mail"
                    className="fea icon-ex-md text-muted me-3"
                  ></i>
                  <div className="flex-1">
                    <h6 className="text-primary mb-0">Email :</h6>
                    <Link to={`mailto:${user.email}`} className="text-muted">
                      {user.email}
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
                    <Link to={`tel:${user.telephone}`} className="text-muted">
                      {user.telephone || "N/A"}
                    </Link>
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
                  <h6 className="text-primary mb-0">Date de naissance :</h6>
                  <p className="text-muted mb-0">{user.date_de_naissance || "N/A"}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <i
                  data-feather="map-pin"
                  className="fea icon-ex-md text-muted me-3"
                ></i>
                <div className="flex-1">
                  <h6 className="text-primary mb-0">Adresse :</h6>
                  <p className="text-muted mb-0">{user.adresse_postale || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
