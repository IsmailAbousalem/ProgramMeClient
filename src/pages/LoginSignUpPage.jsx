import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginSignupPage.css";

function LoginSignUpPage() {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [userType, setUserType] = useState("customer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "", // Added field for phone number
    skills: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleModeSwitch = (mode) => {
    setIsRegisterMode(mode === "register");
  };

  const handleUserTypeSwitch = (type) => {
    setUserType(type);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegisterMode
      ? "http://localhost:8080/auth/signup"
      : "http://localhost:8080/auth/login";
    const userData = {
      ...formData,
      userType: userType === "programmer" ? "programmer" : "customer",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(
          isRegisterMode ? "Registration successful:" : "Login successful:",
          data
        );
        if (isRegisterMode) {
          setIsRegisterMode(false); // Switch to login mode
          navigate("/login-signup");
        } else {
          localStorage.setItem("token", data.jwt); // Store the JWT token
          localStorage.setItem("userType", data.userType); // Store the user type
          navigate("/");
          window.location.reload(); // Refresh the page
        }
      } else {
        console.error(isRegisterMode ? "Registration failed" : "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="loginsignup-container">
      <div className="login-signup-wrapper">
        <div className="login-signup-content">
          <div className="login-signup-header">
            <a className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4fdff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="logo-icon"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
              </svg>
              <span className="logo-text">ProgramMe</span>
            </a>
            <div className="login-register-links">
              <a
                className={`login-link ${!isRegisterMode ? "active" : ""}`}
                onClick={() => handleModeSwitch("login")}
              >
                Login
              </a>
              <a
                className={`register-link ${isRegisterMode ? "active" : ""}`}
                onClick={() => handleModeSwitch("register")}
              >
                Register
              </a>
            </div>
          </div>
          <div className="divider"></div>
          <form className="form-grid" onSubmit={handleSubmit}>
            {isRegisterMode && (
              <div className="form-buttons">
                <button
                  type="button"
                  className={`programmer-button ${
                    userType === "programmer" ? "selected" : ""
                  }`}
                  onClick={() => handleUserTypeSwitch("programmer")}
                >
                  I am a Programmer
                </button>
                <button
                  type="button"
                  className={`customer-button ${
                    userType === "customer" ? "selected" : ""
                  }`}
                  onClick={() => handleUserTypeSwitch("customer")}
                >
                  I am a Customer
                </button>
              </div>
            )}
            {isRegisterMode && (
              <div className="form-field">
                <label className="field-label" htmlFor="name">
                  Name *
                </label>
                <input
                  className="input-field"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}
            <div className="form-field">
              <label className="field-label" htmlFor="email">
                Email *
              </label>
              <input
                className="input-field"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
            {isRegisterMode && (
              <div className="form-field">
                <label className="field-label" htmlFor="number">
                  Phone Number *
                </label>
                <input
                  className="input-field"
                  type="text"
                  id="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            )}
            <div className="form-field">
              <label className="field-label" htmlFor="password">
                Password *
              </label>
              <input
                className="input-field"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>
            {isRegisterMode && userType === "programmer" && (
              <>
                <div className="form-field">
                  <label className="field-label" htmlFor="skills">
                    Skills *
                  </label>
                  <input
                    className="input-field"
                    id="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="Web-Development, React, etc..."
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="field-label" htmlFor="description">
                    Description *
                  </label>
                  <textarea
                    className="input-field"
                    id="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe yourself"
                    required
                  ></textarea>
                </div>
              </>
            )}
            {isRegisterMode && (
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  className="terms-checkbox"
                  id="terms"
                  required
                />
                <label className="checkbox-label" htmlFor="terms">
                  I agree to the{" "}
                  <a className="terms-link" href="#">
                    Terms of Service
                  </a>
                </label>
              </div>
            )}
            <button className="submit-button" type="submit">
              {isRegisterMode ? "Register" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUpPage;
