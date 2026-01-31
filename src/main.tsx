import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BooksPage from './pages/books/BooksPage/BooksPage.tsx'
import LoginPage from './pages/users/LoginPage/LoginPage.tsx'
import PrivateRoute from './routes/PrivateRoute.tsx'
import NotFound from './routes/NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
    
        <Route path='/login' element={<LoginPage />} />
        
        <Route path='/' element={<PrivateRoute><App /></PrivateRoute>}>
          <Route index element={<Navigate to="books" />} />
          <Route path='books' element={<BooksPage />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
  </BrowserRouter>

)
