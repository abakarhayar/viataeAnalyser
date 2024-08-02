import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../Context/AuthContext";
import { useApi } from "../../Context/ApiContext";

export default function SubmitApplication() {
  const { user } = useContext(AuthContext);
  const { apiUrl } = useApi();
  const [formData, setFormData] = useState({
    user_id: user?.id || "",
    job_title: "",
    experience_years: "",
    cover_letter: null,
    cv: null,
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
    data.append("user_id", formData.user_id);
    data.append("job_title", formData.job_title);
    data.append("experience_years", formData.experience_years);
    data.append("cover_letter", formData.cover_letter);
    data.append("cv", formData.cv);

    try {
      const response = await axios.post(`${apiUrl}/candidature/`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log("Candidature réussie", response.data);
    } catch (error) {
      console.error("Erreur lors de la soumission de la candidature", error);
    }
  };

  return (
    <>
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
                        name="job_title"
                        type="text"
                        className="form-control ps-5"
                        placeholder="Titre du poste :"
                        value={formData.job_title}
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
                        name="experience_years"
                        type="number"
                        className="form-control ps-5"
                        placeholder="Années d'expérience :"
                        value={formData.experience_years}
                        onChange={handleChange}
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
                        name="cover_letter"
                        type="file"
                        className="form-control ps-5"
                        onChange={handleFileChange}
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
                        name="cv"
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
    </>
  );
}
