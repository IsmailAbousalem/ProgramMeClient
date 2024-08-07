import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginSignupPage from "./pages/LoginSignUpPage";
import HeaderComponent from "./components/HeaderComponent";
import CreatePostPage from "./pages/CreatePostPage";
import ProfilePage from "./pages/ProfilePage";
import FooterComponent from "./components/FooterComponent";
import PostDetails from "./pages/PostDetails";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/edit-post/:id" element={<CreatePostPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login-signup" element={<LoginSignupPage />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
        <FooterComponent></FooterComponent>
      </AuthProvider>
    </>
  );
}

export default App;
