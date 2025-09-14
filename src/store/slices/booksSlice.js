import { createSlice } from '@reduxjs/toolkit';

// Initial dummy data for the library
const initialState = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      description: "A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream through the eyes of Nick Carraway.",
      rating: 4.5,
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      isPopular: true
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      description: "A gripping tale of racial injustice and childhood innocence in the American South during the 1930s.",
      rating: 4.8,
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      isPopular: true
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      description: "An epic science fiction novel set on the desert planet Arrakis, following Paul Atreides as he navigates political intrigue and mystical powers.",
      rating: 4.7,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      isPopular: true
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      description: "A fascinating exploration of how Homo sapiens came to dominate the world, examining the cognitive, agricultural, and scientific revolutions.",
      rating: 4.6,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      isPopular: false
    },
    {
      id: 5,
      title: "The Foundation Series",
      author: "Isaac Asimov",
      category: "Sci-Fi",
      description: "A groundbreaking science fiction series about psychohistory and the fall and rise of galactic civilization.",
      rating: 4.9,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      isPopular: true
    },
    {
      id: 6,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      category: "Non-Fiction",
      description: "A comprehensive exploration of the two systems that drive the way we think and make decisions.",
      rating: 4.4,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      isPopular: false
    },
    {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fiction",
      description: "A fantasy novel about a hobbit's unexpected journey to help dwarves reclaim their homeland from a dragon.",
      rating: 4.7,
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      isPopular: true
    },
    {
      id: 8,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Non-Fiction",
      description: "A practical guide to building good habits and breaking bad ones, with proven strategies for lasting change.",
      rating: 4.5,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      isPopular: false
    },
    {
      id: 9,
      title: "The Martian",
      author: "Andy Weir",
      category: "Sci-Fi",
      description: "A thrilling story of an astronaut stranded on Mars who must use his ingenuity to survive and signal Earth.",
      rating: 4.6,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      isPopular: true
    },
    {
      id: 10,
      title: "Educated",
      author: "Tara Westover",
      category: "Non-Fiction",
      description: "A powerful memoir about a woman who grows up in a survivalist family and eventually earns a PhD from Cambridge University.",
      rating: 4.7,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      isPopular: false
    }
  ],
  categories: ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Romance", "Biography"],
  searchQuery: "",
  selectedCategory: "All"
};

// Create books slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Add a new book to the library
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: Date.now(), // Simple ID generation
        rating: 0,
        isPopular: false
      };
      state.books.unshift(newBook); // Add to beginning of array
    },
    
    // Update search query
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    
    // Update selected category
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    
    // Clear filters
    clearFilters: (state) => {
      state.searchQuery = "";
      state.selectedCategory = "All";
    }
  }
});

// Export actions
export const { addBook, setSearchQuery, setSelectedCategory, clearFilters } = booksSlice.actions;

// Selectors
export const selectAllBooks = (state) => state.books.books;
export const selectCategories = (state) => state.books.categories;
export const selectSearchQuery = (state) => state.books.searchQuery;
export const selectSelectedCategory = (state) => state.books.selectedCategory;

// Filtered books selector
export const selectFilteredBooks = (state) => {
  const { books, searchQuery, selectedCategory } = state.books;
  
  return books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
};

// Popular books selector
export const selectPopularBooks = (state) => 
  state.books.books.filter(book => book.isPopular);

export default booksSlice.reducer;
