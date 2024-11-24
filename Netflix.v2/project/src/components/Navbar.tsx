import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NetflixLogo } from './NetflixLogo';
import { useAuthStore } from '../store/authStore';

export const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent px-12 py-5">
      <div className="flex items-center justify-between">
        <Link to="/">
          <NetflixLogo />
        </Link>
        {user ? (
          <button
            onClick={handleLogout}
            className="text-white hover:underline"
          >
            Sair
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700"
          >
            Entrar
          </Link>
        )}
      </div>
    </nav>
  );
};