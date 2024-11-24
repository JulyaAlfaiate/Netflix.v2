import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { NetflixLogo } from '../components/NetflixLogo';
import { useAuthStore } from '../store/authStore';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor preencha todos os campos!');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }
    try {
      await login(email, password);
      navigate('/browse');
    } catch (err) {
      setError('Algo deu errado');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div 
        className="relative min-h-screen"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <nav className="px-12 py-5">
            <NetflixLogo />
          </nav>

          <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
            <div className="bg-black bg-opacity-70 p-16 rounded-md w-full max-w-md">
              <h1 className="text-3xl font-bold mb-8">Entrar</h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#333] rounded-md px-5 py-3.5 placeholder-[#8c8c8c] focus:outline-none focus:ring-2 focus:ring-red-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Senha"
                    className="w-full bg-[#333] rounded-md px-5 py-3.5 placeholder-[#8c8c8c] focus:outline-none focus:ring-2 focus:ring-red-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300 flex items-center justify-center gap-2"
                >
                  Criar conta <ChevronRight className="w-5 h-5" />
                </button>
                <div className="text-[#737373] text-sm">
                  <p>Já tem uma conta? <Link to="/login" className="text-white hover:underline">Entrar agora</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};