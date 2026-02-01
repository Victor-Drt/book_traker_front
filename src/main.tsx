import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BooksPage from './pages/books/BooksPage/BooksPage.tsx'
import LoginPage from './pages/users/LoginPage/LoginPage.tsx'
import PrivateRoute from './routes/PrivateRoute.tsx'
import NotFound from './routes/NotFound.tsx'
import CreateBookPage from './pages/books/CreateBookPage/CreateBooKPage.tsx'
import EditBookPage from './pages/books/EditBookPage/EditBookPage.tsx'
import BookDetailPage from './pages/books/BookDetailPage/BookDetailPage.tsx'
import ProgressPage from './pages/progress/ProgressPage/ProgressPage.tsx'
import RecommendationsPage from './pages/recommendations/RecommendationsPage/RecommendationsPage.tsx'
import StatsPage from './pages/stats/StatsPage/StatsPage.tsx'
import HistoryPage from './pages/history/HistoryPage/HistoryPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
    
        <Route path='/login' element={<LoginPage />} />
        
        <Route path='/' element={<PrivateRoute><App /></PrivateRoute>}>
          <Route index element={<BooksPage />}  />
          <Route path='/books/create' element={<CreateBookPage />} />
          <Route path='/books/:id' element={<BookDetailPage />} />
          <Route path='/books/:id/edit' element={<EditBookPage />} />
          <Route path='/progress' element={<ProgressPage />} />
          <Route path='/recommendations' element={<RecommendationsPage />} />
          <Route path='/stats' element={<StatsPage />} />
          <Route path='/history' element={<HistoryPage />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
  </BrowserRouter>

)
