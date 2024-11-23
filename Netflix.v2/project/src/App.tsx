import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Browse } from './pages/Browse';
import { useAuthStore } from './store/authStore';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/browse"
          element={
            <ProtectedRoute>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/browse" />} />
      </Routes>
    </Router>
  );
}

export default App;