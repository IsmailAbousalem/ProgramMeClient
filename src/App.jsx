import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginSignupPage from "./pages/LoginSignUpPage";
import HeaderComponent from "./components/HeaderComponent";
import CreatePostPage from "./pages/CreatePostPage";
import ProfilePage from "./pages/ProfilePage";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
      </Routes>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
