import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { useApi } from "../../Context/ApiContext";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const UserStatisticsChart = () => {
  const [data, setData] = useState(null);
  const { apiUrl } = useApi();

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(`${apiUrl}/statistiques/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques", error);
      }
    };

    fetchStatistics();
  }, [apiUrl]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const chartData = {
    labels: ["Utilisateurs", "Utilisateur anonymisé"],
    datasets: [
      {
        label: "Total",
        data: [data.nombre_utilisateurs, data.nombre_users_anonyms],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div className="rounded shadow mt-4">
    <div className="p-4 border-bottom">
      <h5 className="mb-0 text-danger">Statistique</h5>
    </div>
    
    <div
        className="d-flex justify-content-center align-items-center mt-4 p-4"
        style={{ width: "100%", height: "400px" }} // Adjust the height as needed
      >
      <div className="mt-4 text-center p-8" style={{ width: "300px", height: "300px" }}>
      <Pie data={chartData} />
      </div>
    </div>
  </div>

    
    
     
  );
};

export default UserStatisticsChart;
