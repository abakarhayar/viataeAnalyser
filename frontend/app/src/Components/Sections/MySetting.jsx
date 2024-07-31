import React from "react";
import { Link } from "react-router-dom";

export default function MySetting() {
  return (
    <>
      <div className="col-lg-8 col-12">
        <div className="card border-0 rounded shadow">
          <div className="card-body">
            <h5 className="text-md-start text-center">Modification :</h5>

            <div className="mt-3 text-md-start text-center d-sm-flex"></div>

            <form>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <div className="form-icon position-relative">
                      <i className="fea icon-sm icons uil uil-user "></i>
                      <input
                        name="name"
                        id="first"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Nom :"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Prénom</label>
                    <div className="form-icon position-relative">
                      <i className="fea icon-sm icons uil uil-user-check"></i>
                      <input
                        name="name"
                        id="last"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Prénom :"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <div className="form-icon position-relative">
                      <i className="fea icon-sm icons uil uil-fast-mail"></i>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control ps-5"
                        placeholder="Email :"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Num. Tél</label>
                    <div className="form-icon position-relative">
                      <i className="fea icon-sm icons uil uil-mobile-android"></i>
                      <input
                        name="name"
                        id="occupation"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Num. Tél :"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Adresse</label>
                    <div className="form-icon position-relative">
                      <i className="fea icon-sm icons uil uil-map-pin"></i>
                      <input
                        name="name"
                        id="occupation"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Adresse :"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Date de naissance</label>
                    <div className="form-icon position-relative">
                      <i className="fea icon-sm icons uil uil-calendar-alt"></i>
                      <input
                        name="name"
                        id="occupation"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Date de naissance :"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <div className="form-icon position-relative">
                      <i className="fea icon-sm icons uil uil-align-center-justify"></i>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control ps-5"
                        placeholder="Description :"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn btn-primary"
                    value="Sauvegarder"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rounded shadow mt-4">
          <div className="p-4 border-bottom">
            <h5 className="mb-0 text-danger">Supprimer le compte:</h5>
          </div>

          <div className="p-4">
            <h6 className="mb-0">
              Voulez-vous supprimer le compte ? Veuillez appuyer ci-dessous sur
              "Supprimer le compte"
            </h6>
            <div className="mt-4">
              <button className="btn btn-danger">Supprimer le compte</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
