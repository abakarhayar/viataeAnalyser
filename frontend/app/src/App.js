import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavDiv from "./Components/Partials/NavDiv";
import FooterDiv from "./Components/Partials/FooterDiv";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Auth/Login";
import Profil from "./Components/Pages/Auth/Profil";
import SignUp from "./Components/Pages/Auth/Signup";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import ContactUs from "./Components/Pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavDiv />
     
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/profil"  element={<Profil />}/>
            <Route path="/signup"  element={<SignUp />} />
            <Route path="/contact-us"  element={<ContactUs />}/>
            <Route path="*" element={<NotFoundPage />} />
            </Routes>
         
        <FooterDiv />
      </div>
    </BrowserRouter>
  );
}

export default App;
