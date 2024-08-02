import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../Context/AuthContext";
import { useApi } from "../../Context/ApiContext";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function UserList() {
  const { user } = useContext(AuthContext);
  const { apiUrl } = useApi();
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
      }
    };

    fetchUsers();
  }, [apiUrl]);

  const handleShowUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <>
      <div className="col-lg-8 col-12">
        <div className="component-wrapper rounded shadow">
          <div className="p-4 border-bottom">
            <h5 className="title mb-0">Liste des Utilisateurs</h5>
          </div>

          <div className="p-4">
            <div className="table-responsive bg-white shadow rounded">
              <table className="table table-hover mb-0 table-center">
                <thead>
                  <tr>
                    <th scope="col" className="border-bottom text-center">
                      Nom
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Prénom
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Email
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Rôle
                    </th>
                    <th scope="col" className="border-bottom text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.nom}</td>
                      <td>{user.prenom}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td className="text-justify">
                        <Button
                          variant="info"
                          size="sm"
                          onClick={() => handleShowUser(user)}
                        >
                          <i className="uil uil-eye"></i> Détails
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
          <Modal.Title>Détails de l'utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser ? (
            <div>
              <p><strong>Nom:</strong> {selectedUser.nom}</p>
              <p><strong>Prénom:</strong> {selectedUser.prenom}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Numéro de téléphone:</strong> {selectedUser.telephone}</p>
              <p><strong>Rôle:</strong> {selectedUser.role}</p>
            </div>
          ) : (
            <p>Chargement des détails...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
