import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useApi } from './ApiContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { apiUrl } = useApi();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    // console.log("Token actuel :", token); 
  
    if (token) {
      axios.get(`${apiUrl}/profil/`, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          // console.log("Réponse de l'API :", response.data); 
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération de l'utilisateur :", error);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          setUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [apiUrl]);
  

  const login = async (formData) => {
    const response = await axios.post(`${apiUrl}/connexion/`, formData);
    const { access, refresh, user } = response.data;

    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    setUser(user);
    

    return response;
  };

const logout = async () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    try {
      await axios.post(`${apiUrl}/deconnexion/`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Erreur lors de la déconnexion de l'API", error);
    }
  }
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  setUser(null);
};
  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
