// import { useState, useContext } from "react";
// import { PostContext } from "../context/PostContext";
// import "../styles/SideNavbar.css";

// function SideNavbar() {
//   const { posts, setFilteredPosts } = useContext(PostContext);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Handle search filtering
//   const handleSearch = (event) => {
//     const query = event.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filteredPosts = posts.filter((post) => {
//       return (
//         post.title.toLowerCase().includes(query) ||
//         post.description.toLowerCase().includes(query) ||
//         post.programmerName.toLowerCase().includes(query) ||
//         post.price.toString().includes(query)
//       );
//     });
    
//     setFilteredPosts(filteredPosts); // Update the filtered posts
//   };

//   return (
//     <div className="side-navbar">
//       {/* Search bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search posts..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </div>

//       {/* Menu items */}
//       <div className="menu">
//         <button>Favorites</button>
//         <button>Profile</button>
//         <button>Settings</button>
//         <button>More...</button>
//       </div>
//     </div>
//   );
// }

// export default SideNavbar;
