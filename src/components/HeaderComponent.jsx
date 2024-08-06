import { Link } from "react-router-dom";
import "../styles/HeaderComponent.css";
import { CgProfile } from "react-icons/cg";

function HeaderComponent() {
  return (
    <header class="bg-[#000f1f] border-b-2 border-b-[#1a3b5d] px-4 lg:px-6 h-14 flex items-center justify-between">
      {" "}
      <a class="flex items-center gap-2" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <span class="font-bold text-white text-lg">ProgramMe</span>
      </a>
      <div class="flex items-center gap-4">
      <a
          href="/login-signup"
          class="inline-flex text-white h-9 items-center justify-center bg-[#015f8b] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#014f7a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#015f8b] square-edges"
        >
          Login/Signup
        </a>
        <a
          href="/create-post"
          class="inline-flex text-white h-9 items-center justify-center bg-[#015f8b] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-[#014f7a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#015f8b] square-edges"
        >
          Create a Post
        </a>
        <Link to="/profile" className="profile text-white">
          <CgProfile className="h-6 w-6" /> {/* Adjust the size here */}
        </Link>
      </div>
    </header>
  );
}

export default HeaderComponent;
