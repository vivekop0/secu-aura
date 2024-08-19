
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Loginpage } from './pages/Loginpage';
import { DashboardPage } from './pages/Dashboard';
import  { isAuthenticated } from './components/ProtectedRoute'; // Import the ProtectedRoute component
import { Signupage } from './pages/Signupage';

export const App = () => {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Signupage/>} />
          <Route path="/login"  element={<Loginpage/>} />
      
          <Route
            path="/dashboard"
              element={isAuthenticated?<DashboardPage/>:<Loginpage/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
