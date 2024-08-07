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
        <div className="svg-header">
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.demolab.com?font=Nova+Square&weight=900&size=50&pause=1000&color=CFFDFF&background=000F1F00&vCenter=true&multiline=true&repeat=false&random=true&width=630&height=80&lines=Welcome+to+ProgramMe..."
              alt="Typing SVG"
            />
          </a>
        </div>
        <div className="post-card-container">
          <ul className="post-card-list">{postCards}</ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
