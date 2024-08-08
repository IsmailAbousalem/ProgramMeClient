import { Link, useNavigate } from "react-router-dom";
import "../styles/HeaderComponent.css";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";

function HeaderComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [userName, setUserName] = useState(null); // Track user's name
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by verifying the token in localStorage
    const token = localStorage.getItem("token");
    const storedUserType = localStorage.getItem("userType");
    const storedUserName = localStorage.getItem("userName");
    console.log(storedUserType); // Debugging line

    if (token && storedUserType) {
      setIsLoggedIn(true);
      setUserType(storedUserType);
      setUserName(storedUserName); // Set the user's name
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage data
    // localStorage.removeItem("token");     |
    // localStorage.removeItem("userType");  |
    // localStorage.removeItem("userEmail"); | // ALTERNATIVELY COULD REMOVE JUST THE USER KEYS
    // localStorage.removeItem("userId");    |
    setIsLoggedIn(false);
    setUserType(null);
    setUserName(null);
    navigate("/login-signup");
    window.location.reload(); // Refresh the page after logging out
  };

  return (
    <header className="bg-[#000f1f] border-b-2 border-b-[#1a3b5d] px-4 lg:px-6 h-14 flex items-center justify-between">
      <a className="flex items-center gap-2" href="/">
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
        <span className="font-bold text-[#d4fdff] text-xl">ProgramMe</span>
      </a>
      <div className="flex items-center gap-4">
        {!isLoggedIn && (
          <a
            href="/login-signup"
            className="inline-flex text-white h-9 items-center justify-center bg-[#015f8b] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#014f7a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#015f8b] square-edges"
          >
            Login/Signup
          </a>
        )}
        {isLoggedIn && userType === "programmer" && (
          <a
            href="/create-post"
            className="inline-flex text-white h-9 items-center justify-center bg-[#015f8b] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#014f7a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#015f8b] square-edges"
          >
            Create a Post
          </a>
        )}
        {isLoggedIn && (
          <>
            <Link to="/profile" className="profile text-white">
              <CgProfile className="h-6 w-6" />
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex text-white h-9 items-center justify-center bg-red-600 px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-red-600 square-edges"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default HeaderComponent;
