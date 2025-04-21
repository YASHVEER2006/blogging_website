import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="blog-app">
        <Navbar />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;