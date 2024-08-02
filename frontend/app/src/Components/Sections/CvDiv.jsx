import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../Context/AuthContext";
import { useApi } from "../../Context/ApiContext";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function CvDiv() {
  const { user } = useContext(AuthContext);
  const { apiUrl } = useApi();
  const [candidatures, setCandidatures] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedObservation, setSelectedObservation] = useState("");
  const baseUrl = "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchCandidatures = async () => {
      try {
        const response = await axios.get(`${apiUrl}/afficher_candidature/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setCandidatures(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des candidatures", error);
      }
    };

    fetchCandidatures();
  }, [apiUrl]);

  const handleShowObservation = (observation) => {
    setSelectedObservation(observation);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="col-lg-8 col-12">
        <div className="component-wrapper rounded shadow">
          <div className="p-4 border-bottom">
            <h5 className="title mb-0">Cvthèque</h5>
          </div>

          <div className="p-4">
            <div className="table-responsive bg-white shadow rounded">
              <table className="table table-hover mb-0 table-center ">
                <thead>
                  <tr>
                    <th scope="col" className="border-bottom text-center">
                      Titre de l'emploi
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Années d'expérience
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Score CV
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {candidatures.map((candidature) => (
                    <tr key={candidature.id}>
                      <td>{candidature.titre_emploi}</td>
                      <td>{candidature.annee_experience}</td>
                      <td>{candidature.score_cv}%</td>
                      <td className="text-justify">
                        <Link
                          to={`${baseUrl}${candidature.cv_candidat}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="primary" size="sm"> <i class="uil uil-eye"></i> CV</Button>
                        </Link>
                        {candidature.lettre_motiv && (
                          <Link
                            to={`${baseUrl}${candidature.lettre_motiv}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="secondary " size="sm" className="ml-2"> <i class="uil uil-eye"></i> Lettre cc</Button>
                          </Link>
                        )}
                       

                        <Button
                          variant="info"
                          size="sm"
                          className="ml-2"
                          onClick={() => handleShowObservation(candidature.observation)}
                        > <i class="uil uil-eye"></i>  Observation
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Observation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedObservation}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
