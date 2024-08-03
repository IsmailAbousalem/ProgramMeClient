import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginSignupPage from "./pages/LoginSignUpPage";
import HeaderComponent from "./components/HeaderComponent";
import CreatePostPage from "./pages/CreatePostPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <HeaderComponent>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login-signup" element={<LoginSignupPage />} />
        </Route>
      </Routes>
    </HeaderComponent>
  );
}

export default App;
