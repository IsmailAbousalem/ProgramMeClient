import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import { formatDistanceToNowStrict } from "date-fns";
import apiFetch from "../context/apiFetch";
import "../styles/PostCard.css"; // Ensure this CSS file contains all necessary styles
import "../styles/HomePage.css"; // Ensure this CSS file contains the background styles

function PostDetails() {
  const { id } = useParams();
  const { getPost } = useContext(PostContext);
  const [post, setPost] = useState();
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || 'https://programmeserver-1.onrender.com';


  // Get the current logged-in user email
  const loggedInUserEmail = localStorage.getItem("userEmail");

  const obtainPost = async (id) => {
    const data = await getPost(id);
    setPost(data);
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert(
        "Session expired or insufficient permissions. Please log in again."
      );
      return;
    }

    try {
      const response = await fetch(`${API_URL}/posts/${post.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Post deleted successfully");
        navigate("/"); // Redirect to home after deletion
      } else if (response.status === 403 || response.status === 401) {
        alert(
          "Session expired or insufficient permissions. Please log in again."
        );
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    obtainPost(id);
  }, [id]);

  return (
    <>
      {!post && <h2>Loading...</h2>}
      {post && (
        <div className="post-details-container">
          <article className="post-card">
            <h3>{post.programmerName}</h3>
            {/* <h4>{post.description}</h4> */}
            <div className="date-container">
              <svg
                className="calendar-icon"
                width="16" // Adjusted width
                height="16" // Adjusted height
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="date">
                {formatDistanceToNowStrict(new Date(post.date), {
                  addSuffix: true,
                })}
              </p>
            </div>
            <Link to={`/posts/${post.id}`}>
              <h3 className="title">{post.title}</h3>
            </Link>
            <p className="description">{post.description}</p>
            <div className="bottom-container">
              <p className="price">${post.price} /hr</p>
            </div>

            {/* Render Edit and Delete buttons only if the logged-in user is the post creator */}
            {post.programmerEmail === loggedInUserEmail && (
              <div className="post-actions">
                <Link
                  to={{
                    pathname: `/create-post/${post.id}`,
                    state: { post }, // Pass the entire post object
                  }}
                  className="edit-button"
                >
                  Edit
                </Link>

                <button onClick={handleDelete} className="delete-button">
                  Delete
                </button>
              </div>
            )}
          </article>
        </div>
      )}
    </>
  );
}

export default PostDetails;
