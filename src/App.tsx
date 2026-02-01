import './App.css'
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <div className="appLayout">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
