import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList';
import Favorites from './components/Favorites';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoBack from './components/GoBack';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='/favorites/books/:id' element={<BookDetails />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <GoBack/>
      <Footer />
    </div>
  );
}

export default App;
