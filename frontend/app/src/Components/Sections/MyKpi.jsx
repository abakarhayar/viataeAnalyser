import React, { useEffect, useState } from "react";
import axios from "axios";
import { useApi } from "../../Context/ApiContext";

export default function MyKpi() {
  const [stats, setStats] = useState(null);
  const { apiUrl } = useApi();

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(`${apiUrl}/statistiques/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setStats(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques", error);
      }
    };

    fetchStatistics();
  }, [apiUrl]);

  if (!stats) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
          <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
            <div className="icon text-center rounded-circle me-3">{stats.nombre_cv}</div>
            <div className="flex-1">
              <h4 className="title mb-0">Nombre de CV</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
          <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
            <div className="icon text-center rounded-circle me-3">{stats.nombre_utilisateurs}</div>
            <div className="flex-1">
              <h4 className="title mb-0">Utilisateurs</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-4 pt-2">
          <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
            <div className="icon text-center rounded-circle me-3">{stats.nombre_users_anonyms}</div>
            <div className="flex-1">
              <h4 className="title mb-0">U. Anonymisé</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
