import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { 
  selectFilteredBooks, 
  selectCategories, 
  selectSearchQuery, 
  selectSelectedCategory,
  setSearchQuery, 
  setSelectedCategory,
  clearFilters
} from '../store/slices/booksSlice';
import { Search, Filter, X, Star, BookOpen } from 'lucide-react';
import './BrowseBooks.css';

const BrowseBooks = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const books = useSelector(selectFilteredBooks);
  const categories = useSelector(selectCategories);
  const searchQuery = useSelector(selectSearchQuery);
  const selectedCategory = useSelector(selectSelectedCategory);


  // Set category from URL params
  useEffect(() => {
    if (category) {
      const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
      dispatch(setSelectedCategory(formattedCategory));
    }
  }, [category, dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCategoryChange = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };


  return (
    <div className="browse-books">
      <div className="browse-container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">
            {selectedCategory === "All" ? "Browse All Books" : `${selectedCategory} Books`}
          </h1>
          <p className="page-description">
            Discover your next favorite book from our extensive collection
          </p>
        </div>

        {/* Filters Section */}
        <div className="filters-section">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          <div className="filter-container">
            <Filter className="filter-icon" />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="category-select"
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {(searchQuery || selectedCategory !== "All") && (
            <button onClick={handleClearFilters} className="clear-filters-btn">
              <X className="clear-icon" />
              Clear Filters
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p className="results-count">
            {books.length} book{books.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Books Grid */}
        {books.length > 0 ? (
          <div className="books-grid">
            {books.map((book) => (
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
                  <p className="book-description">
                    {book.description.length > 100 
                      ? `${book.description.substring(0, 100)}...` 
                      : book.description
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <BookOpen className="no-results-icon" />
            <h3>No books found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button onClick={handleClearFilters} className="clear-filters-btn">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
