import './App.css'
import BooksPage from './pages/books/BooksPage/BooksPage';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Outlet />
    </>
  );
}

export default App
