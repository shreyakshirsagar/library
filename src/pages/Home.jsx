import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCategories, selectPopularBooks } from '../store/slices/booksSlice';
import { BookOpen, Star, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const categories = useSelector(selectCategories);
  const popularBooks = useSelector(selectPopularBooks);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Our <span className="highlight">Online Library</span>
          </h1>
          <p className="hero-description">
            Discover thousands of books across various genres. 
            From classic literature to modern science fiction, 
            find your next favorite read with us.
          </p>
          <Link to="/browse" className="cta-button">
            Start Browsing
            <ArrowRight className="cta-icon" />
          </Link>
        </div>
        <div className="hero-image">
          <BookOpen className="hero-icon" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Explore Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              key={category} 
              to={`/browse/${category.toLowerCase()}`}
              className="category-card"
            >
              <div className="category-icon">
                <BookOpen />
              </div>
              <h3 className="category-name">{category}</h3>
              <p className="category-description">
                Discover amazing {category.toLowerCase()} books
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books-section">
        <div className="section-header">
          <h2 className="section-title">Popular Books</h2>
          <Link to="/browse" className="view-all-link">
            View All Books
            <ArrowRight className="view-all-icon" />
          </Link>
        </div>
        <div className="books-grid">
          {popularBooks.slice(0, 6).map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-cover">
                <img src={book.coverImage} alt={book.title} />
                <div className="book-overlay">
                  <Link to={`/book/${book.id}`} className="view-details-btn">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <div className="book-rating">
                  <Star className="star-icon filled" />
                  <span className="rating-value">{book.rating}</span>
                </div>
                <span className="book-category">{book.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
