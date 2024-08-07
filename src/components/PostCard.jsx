import { Link } from "react-router-dom";
import { formatDistanceToNowStrict } from "date-fns";
import "../styles/PostCard.css";

function PostCard({ post }) {
  // Get the current logged-in user email
  const loggedInUserEmail = localStorage.getItem("userEmail");

  const handleDelete = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:8080/posts/${post.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Post deleted successfully");
        window.location.reload(); // Refresh the page after deletion
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="post-card">
      <h3>{post.programmerName}</h3>
      <h4>{post.description}</h4>

      <p className="date">
        <svg
          className="calendar-icon"
          width="100%"
          height="100%"
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
        {formatDistanceToNowStrict(new Date(post.date), { addSuffix: true })}
      </p>

      <Link to={`/posts/${post.id}`}>
        <h3 className="title">{post.title}</h3>
      </Link>
      <p className="description">{post.description}</p>

      <div className="bottom-container">
        <p className="price">${post.price} /hr</p>
        <Link to={`/posts/${post.id}`}>
          <button className="button">→</button>
        </Link>
      </div>

      {/* Render Edit and Delete buttons only if the logged-in user is the post creator */}
      {post.programmerEmail === loggedInUserEmail && (
        <div className="post-actions">
          <Link
            to={{
              pathname: "/create-post",
              state: { post },
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
    </section>
  );
}

export default PostCard;
