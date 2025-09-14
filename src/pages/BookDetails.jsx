import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { selectAllBooks } from '../store/slices/booksSlice';
import { ArrowLeft, Star, BookOpen, Calendar, User } from 'lucide-react';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector(selectAllBooks);
  
  // Find the book by ID
  const book = books.find(book => book.id === parseInt(id));

  // If book not found, show error
  if (!book) {
    return (
      <div className="book-details">
        <div className="book-details-container">
          <div className="book-not-found">
            <BookOpen className="not-found-icon" />
            <h2>Book Not Found</h2>
            <p>The book you're looking for doesn't exist.</p>
            <Link to="/browse" className="back-to-browse-btn">
              <ArrowLeft className="back-icon" />
              Back to Browse
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleBackToBrowse = () => {
    navigate('/browse');
  };

  return (
    <div className="book-details">
      <div className="book-details-container">
        {/* Back Button */}
        <button onClick={handleBackToBrowse} className="back-button">
          <ArrowLeft className="back-icon" />
          Back to Browse
        </button>

        {/* Book Details Content */}
        <div className="book-details-content">
          {/* Book Cover and Basic Info */}
          <div className="book-main-info">
            <div className="book-cover-large">
              <img src={book.coverImage} alt={book.title} />
            </div>
            
            <div className="book-basic-info">
              <h1 className="book-title">{book.title}</h1>
              <p className="book-author">
                <User className="author-icon" />
                by {book.author}
              </p>
              
              <div className="book-meta">
                <div className="book-rating">
                  <Star className="star-icon filled" />
                  <span className="rating-value">{book.rating}</span>
                  <span className="rating-text">out of 5</span>
                </div>
                
                <div className="book-category">
                  <BookOpen className="category-icon" />
                  <span>{book.category}</span>
                </div>
              </div>

              <div className="book-actions">
                <button className="add-to-favorites-btn">
                  Add to Favorites
                </button>
                <button className="share-btn">
                  Share Book
                </button>
              </div>
            </div>
          </div>

          {/* Book Description */}
          <div className="book-description-section">
            <h2 className="section-title">About This Book</h2>
            <p className="book-description">{book.description}</p>
          </div>

          {/* Additional Information */}
          <div className="book-additional-info">
            <div className="info-card">
              <h3>Book Details</h3>
              <div className="info-item">
                <span className="info-label">Category:</span>
                <span className="info-value">{book.category}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Rating:</span>
                <span className="info-value">
                  <Star className="star-icon filled" />
                  {book.rating}/5
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Status:</span>
                <span className="info-value available">Available</span>
              </div>
            </div>

            <div className="info-card">
              <h3>Similar Books</h3>
              <p className="similar-books-text">
                Check out other books in the {book.category} category
              </p>
              <Link 
                to={`/browse/${book.category.toLowerCase()}`}
                className="view-similar-btn"
              >
                View Similar Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
