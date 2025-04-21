import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function BlogList({ posts, onDelete }) {
  return (
    <div className="posts-grid">
      {posts.map(post => (
        <article key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p className="post-excerpt">
            {post.content.substring(0, 150)}{post.content.length > 150 ? '...' : ''}
          </p>
          <div className="post-actions">
            <Link to={`/edit/${post.id}`} className="edit-btn">
              <FiEdit /> Edit
            </Link>
            <button onClick={() => onDelete(post.id)} className="delete-btn">
              <FiTrash2 /> Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default BlogList;