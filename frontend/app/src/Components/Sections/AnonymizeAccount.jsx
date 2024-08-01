import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../Context/AuthContext";
import { useApi } from "../../Context/ApiContext";


export default function AnonymizeAccount() {
  const { setUser } = useContext(AuthContext);
  const { apiUrl } = useApi();
  const navigate = useNavigate();

  const handleAnonymize = async () => {
    try {
      await axios.post(`${apiUrl}/anonymiser/`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/login');
    } catch (error) {
      console.error("Erreur lors de l'anonymisation du compte", error);
      navigate('/login');
    }
  };

  return (
    <>
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
            <button className="btn btn-danger" onClick={handleAnonymize}>
              Supprimer le compte
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
