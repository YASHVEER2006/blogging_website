import { Link } from 'react-router-dom';
import { FaPenAlt, FaHome } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link to="/">StoryHub</Link>
      </div>
      <div className="nav-links">
        <Link to="/"><FaHome /> Home</Link>
        <Link to="/add"><FaPenAlt /> New Post</Link>
      </div>
    </nav>
  );
}

export default Navbar;