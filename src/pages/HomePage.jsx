import { useContext, useEffect } from "react";
import PostCard from "../components/PostCard";
import { PostContext } from "../context/PostContext";
import "../styles/PostCard.css";
import "../styles/HomePage.css";

function HomePage() {
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  const postCards = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCard post={post}></PostCard>
      </li>
    );
  });

  return (
    <>
      <div className="home-page">
        <div className="post-card-container">
          <ul className="post-card-list">{postCards}</ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
