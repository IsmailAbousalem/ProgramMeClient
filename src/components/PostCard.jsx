import { Link } from "react-router-dom";
import { formatDistanceToNowStrict } from "date-fns";

function PostCard(props) {
  const { post } = props;

  return (
    <section className="post-card">
      <h3>{post.programmer.name}</h3>
      <h4>{post.programmer.description}</h4>
      <p className="date">
        {formatDistanceToNowStrict(new Date(post.date), { addSuffix: true })}
      </p>
      <img src={post.image} alt={post.title} />

      <Link to={`/posts/${post.id}`}>
        <h3 className="title">{post.title}</h3>
      </Link>
      <p className="description">{post.description}</p>
      <p className="price">{post.price}</p>
      <button className="button">→</button>
    </section>
  );
}

export default PostCard;
