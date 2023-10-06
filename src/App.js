import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes instead of Link
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import PasswordReset from "./components/passwordReset"; // Import PasswordReset component

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          {/* Add a route for the password reset page */}
          <Route path="/password-reset/:token" element={<PasswordReset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
