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
import MyCv from "./Components/Pages/Auth/MyCv";
import Setting from "./Components/Pages/Auth/Setting";
import { ApiProvider } from "./Context/ApiContext";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Components/Sections/PrivateRoute";
import Candidate from "./Components/Pages/Auth/Candidate";
import User from "./Components/Pages/Auth/User";
import Searchcandidate from "./Components/Pages/Auth/Searchcandidate";
// import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  return (
    <ApiProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <NavDiv />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/contactus" element={<ContactUs />} />
              
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/profil" element={<Profil />} />
                <Route path="/candidate" element={<Candidate />} />
                <Route path="/mycv" element={<MyCv />} />
                <Route path="/settings" element={<Setting />} />
                <Route path="/userlist" element={<User />} />
                <Route path="/searchcandidate" element={<Searchcandidate />} />
              </Route>
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <FooterDiv />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ApiProvider>
  );
}

export default App;
