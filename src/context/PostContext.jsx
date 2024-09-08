import { createContext, useState } from "react";

const PostContext = createContext();
const API_URL = process.env.REACT_APP_API_URL;

function PostProviderWrapper(props) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  const getPost = async (id) => {
    const response = await fetch(`${API_URL}/posts/${id}`);
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
