import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            {/* Routes with Header */}
            <Route path="/" element={
              <>
                <Header />
                <Home />
              </>
            } />
            <Route path="/browse" element={
              <>
                <Header />
                <BrowseBooks />
              </>
            } />
            <Route path="/browse/:category" element={
              <>
                <Header />
                <BrowseBooks />
              </>
            } />
            <Route path="/book/:id" element={
              <>
                <Header />
                <BookDetails />
              </>
            } />
            <Route path="/add-book" element={
              <>
                <Header />
                <AddBook />
              </>
            } />
            
            {/* 404 Route without Header */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;