import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../Context/AuthContext";
import { useApi } from "../../Context/ApiContext";
import { Link, useNavigate } from "react-router-dom";


export default function SubmitApplication() {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { apiUrl } = useApi();
  const [formData, setFormData] = useState({
    titre_emploi: "",
    annee_experience: "",
    cv_candidat: null,
    lettre_motiv: null,
    observation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [name]: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("titre_emploi", formData.titre_emploi);
    data.append("annee_experience", formData.annee_experience);
    if (formData.cv_candidat) {
      data.append("cv_candidat", formData.cv_candidat);
    }
    if (formData.lettre_motiv) {
      data.append("lettre_motiv", formData.lettre_motiv);
    }
    data.append("observation", formData.observation);

    try {
      const response = await axios.post(`${apiUrl}/ajouter_candidature/`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Candidature réussie", response.data);
      navigate("/profil");
    } catch (error) {
      console.error("Erreur lors de la soumission de la candidature", error);
    }
  };

  return (
    <div className="col-lg-8 col-12">
      <div className="card border-0 rounded shadow">
        <div className="card-body">
          <h5 className="text-md-start text-center">Soumettre une candidature :</h5>
          <form onSubmit={handleSubmit}>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Titre du poste</label>
                  <div className="form-icon position-relative">
                    <i className="fea icon-sm icons uil uil-briefcase"></i>
                    <input
                      name="titre_emploi"
                      type="text"
                      className="form-control ps-5"
                      placeholder="Titre du poste"
                      value={formData.titre_emploi}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Années d'expérience</label>
                  <div className="form-icon position-relative">
                    <i className="fea icon-sm icons uil uil-calendar-alt"></i>
                    <input
                      name="annee_experience"
                      type="number"
                      className="form-control ps-5"
                      placeholder="Années d'expérience"
                      value={formData.annee_experience}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">CV</label>
                  <div className="form-icon position-relative">
                    <i className="fea icon-sm icons uil uil-file"></i>
                    <input
                      name="cv_candidat"
                      type="file"
                      className="form-control ps-5"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Lettre de motivation</label>
                  <div className="form-icon position-relative">
                    <i className="fea icon-sm icons uil uil-file-alt"></i>
                    <input
                      name="lettre_motiv"
                      type="file"
                      className="form-control ps-5"
                      onChange={handleFileChange}
                    />
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
                  value="Soumettre"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
