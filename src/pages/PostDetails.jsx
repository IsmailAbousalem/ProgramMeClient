import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import { formatDistanceToNowStrict } from "date-fns";

function PostDetails() {
  const { id } = useParams();

  const { getPost } = useContext(PostContext);

  const [post, setPost] = useState();

  const obtainPost = async (id) => {
    const data = await getPost(id);
    setPost(data);
  };

  useEffect(() => {
    obtainPost(id);
  }, [id]);

  return (
    <>
      {!post && <h2>Loading...</h2>}
      {post && (
        <article className="post-card">
          <h3>{post.programmer.name}</h3>
          <h4>{post.programmer.description}</h4>
          <p className="date">
            {formatDistanceToNowStrict(new Date(post.date), {
              addSuffix: true,
            })}
          </p>
          <img src={post.image} alt={post.title} />

          <Link to={`/posts/${post.id}`}>
            <h3 className="title">{post.title}</h3>
          </Link>
          <p className="description">{post.description}</p>
          <p className="price">{post.price}</p>
          <button className="button">→</button>
        </article>
      )}
    </>
  );
}

export default PostDetails;
