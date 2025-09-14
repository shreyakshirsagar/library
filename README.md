# Online Library System

A modern, responsive online library management system built with React, Vite, Redux, and React Router. This application allows users to browse, search, and manage a digital book collection with an intuitive and beautiful user interface.


## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shreyakshirsagar/library
   cd online-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
online-library/
├── public/
│   ├── favicon.svg          # Custom favicon
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   └── Header.jsx       # Navigation component
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── BrowseBooks.jsx  # Browse books page
│   │   ├── BookDetails.jsx  # Book details page
│   │   ├── AddBook.jsx      # Add book page
│   │   └── NotFound.jsx     # 404 page
│   ├── store/
│   │   ├── store.js         # Redux store configuration
│   │   └── slices/
│   │       └── booksSlice.js # Books state management
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Application entry point
│   ├── App.css              # Global styles
│   └── index.css            # Base styles and CSS variables
```
