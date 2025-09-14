import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../store/slices/booksSlice';
import { selectCategories } from '../store/slices/booksSlice';
import { Plus, BookOpen, User, FileText, Star, Image } from 'lucide-react';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop'
  });

  // Form validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Description must be at least 20 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Add the book to the store
      dispatch(addBook(formData));
      
      // Redirect to browse page
      navigate('/browse');
    }
  };

  return (
    <div className="add-book">
      <div className="add-book-container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">
            <Plus className="title-icon" />
            Add New Book
          </h1>
          <p className="page-description">
            Share your favorite book with our community by adding it to our library
          </p>
        </div>

        {/* Add Book Form */}
        <div className="add-book-form-container">
          <form onSubmit={handleSubmit} className="add-book-form">
            {/* Book Title */}
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                <BookOpen className="label-icon" />
                Book Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`form-input ${errors.title ? 'error' : ''}`}
                placeholder="Enter the book title"
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            {/* Author */}
            <div className="form-group">
              <label htmlFor="author" className="form-label">
                <User className="label-icon" />
                Author *
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className={`form-input ${errors.author ? 'error' : ''}`}
                placeholder="Enter the author's name"
              />
              {errors.author && <span className="error-message">{errors.author}</span>}
            </div>

            {/* Category */}
            <div className="form-group">
              <label htmlFor="category" className="form-label">
                <FileText className="label-icon" />
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`form-select ${errors.category ? 'error' : ''}`}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <span className="error-message">{errors.category}</span>}
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                <FileText className="label-icon" />
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={`form-textarea ${errors.description ? 'error' : ''}`}
                placeholder="Enter a detailed description of the book (minimum 20 characters)"
                rows="5"
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            {/* Cover Image URL */}
            <div className="form-group">
              <label htmlFor="coverImage" className="form-label">
                <Image className="label-icon" />
                Cover Image URL
              </label>
              <input
                type="url"
                id="coverImage"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter cover image URL (optional)"
              />
              <p className="form-help">
                Leave empty to use default cover image
              </p>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="button" onClick={() => navigate('/browse')} className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                <Plus className="submit-icon" />
                Add Book
              </button>
            </div>
          </form>

          {/* Preview Section */}
          <div className="book-preview">
            <h3 className="preview-title">Preview</h3>
            <div className="preview-book-card">
              <div className="preview-book-cover">
                <img src={formData.coverImage} alt="Preview" />
              </div>
              <div className="preview-book-info">
                <h4 className="preview-book-title">
                  {formData.title || 'Book Title'}
                </h4>
                <p className="preview-book-author">
                  by {formData.author || 'Author Name'}
                </p>
                <span className="preview-book-category">
                  {formData.category || 'Category'}
                </span>
                <p className="preview-book-description">
                  {formData.description || 'Book description will appear here...'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
