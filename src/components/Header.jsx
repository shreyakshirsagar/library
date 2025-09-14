import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, Search, Plus } from 'lucide-react';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <BookOpen className="logo-icon" />
          <span className="logo-text">Online Library</span>
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <Home className="nav-icon" />
            Home
          </Link>
          <Link 
            to="/browse" 
            className={`nav-link ${location.pathname.startsWith('/browse') ? 'active' : ''}`}
          >
            <Search className="nav-icon" />
            Browse Books
          </Link>
          <Link 
            to="/add-book" 
            className={`nav-link ${location.pathname === '/add-book' ? 'active' : ''}`}
          >
            <Plus className="nav-icon" />
            Add Book
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
