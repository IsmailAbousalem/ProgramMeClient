import { useContext, useEffect } from "react";
import PostCard from "../components/PostCard";
import { PostContext } from "../context/PostContext";

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
      <ul>{postCards}</ul>
    </>
  );
}

export default HomePage;
