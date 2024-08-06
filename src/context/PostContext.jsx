import { createContext, useState } from "react";

const PostContext = createContext();

function PostProviderWrapper(props) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  const getPost = async (id) => {
    const response = await fetch(`http://localhost:8080/posts/${id}`);
    const data = await response.json();
    console.log(data);
    return(data);
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, getPosts, getPost }}>
      {props.children}
    </PostContext.Provider>
  );
}

export { PostContext, PostProviderWrapper };
