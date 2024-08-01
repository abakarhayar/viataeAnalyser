import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../Context/AuthContext";
import { useApi } from "../../Context/ApiContext";
import AnonymizeAccount from "./AnonymizeAccount";

export default function MySetting() {
  const { user } = useContext(AuthContext);
  const { apiUrl } = useApi();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse_postale: "",
    date_de_naissance: "",
    description: "",
    is_active: true,
    is_staff: false,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nom: user.nom || "",
        prenom: user.prenom || "",
        email: user.email || "",
        telephone: user.telephone || "",
        adresse_postale: user.adresse_postale || "",
        date_de_naissance: user.date_de_naissance || "",
        description: user.description || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${apiUrl}/profil/modifier/`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      // console.log("Modification réussie", response.data);
    } catch (error) {
      console.error("Erreur lors de la modification du profil", error);
    }
  };

  return (
    <>
      <div className="col-lg-8 col-12">
        <div className="card border-0 rounded shadow">
          <div className="card-body">
            <h5 className="text-md-start text-center">Modification :</h5>
            <form onSubmit={handleSubmit}>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <div className="form-icon position-relative">
                      <i className="fea icon-sm icons uil uil-user"></i>
                      <input
                        name="nom"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Nom :"
                        value={formData.nom}
                        onChange={handleChange}
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
                        name="prenom"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Prénom :"
                        value={formData.prenom}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb3">
                    <label className="form-label">Email</label>
                    <div className="form-icon position-relative">
                      <i className="fea icon-sm icons uil uil-fast-mail"></i>
                      <input
                        name="email"
                        type="email"
                        className="form-control ps-5"
                        placeholder="Email :"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="telephone"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Num. Tél :"
                        value={formData.telephone}
                        onChange={handleChange}
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
                        name="adresse_postale"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Adresse :"
                        value={formData.adresse_postale}
                        onChange={handleChange}
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
                        name="date_de_naissance"
                        type="date"
                        className="form-control ps-5"
                        placeholder="Date de naissance :"
                        value={formData.date_de_naissance}
                        onChange={handleChange}
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
                        name="description"
                        rows="4"
                        className="form-control ps-5"
                        placeholder="Description :"
                        value={formData.description}
                        onChange={handleChange}
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
      <AnonymizeAccount/>
      </div>
    </>
  );
}


