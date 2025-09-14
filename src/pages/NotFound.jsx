import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, AlertTriangle } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found">
      <div className="not-found-container">
        {/* 404 Icon and Message */}
        <div className="not-found-content">
          <div className="error-icon">
            <AlertTriangle className="warning-icon" />
          </div>
          
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          
          <div className="error-details">
            <p className="error-message">
              The page you're looking for doesn't exist.
            </p>
            <div className="invalid-route">
              <span className="route-label">Invalid URL:</span>
              <code className="route-url">{location.pathname}</code>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="not-found-actions">
            <Link to="/" className="home-btn">
              <Home className="btn-icon" />
              Go to Home
            </Link>
            <Link to="/browse" className="browse-btn">
              <BookOpen className="btn-icon" />
              Browse Books
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="helpful-links">
            <h3>You might be looking for:</h3>
            <ul className="links-list">
              <li><Link to="/">Home Page</Link></li>
              <li><Link to="/browse">Browse All Books</Link></li>
              <li><Link to="/add-book">Add New Book</Link></li>
            </ul>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="decorative-elements">
          <BookOpen className="decorative-book-1" />
          <BookOpen className="decorative-book-2" />
          <BookOpen className="decorative-book-3" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
