import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { Navbar } from '../components/Navbar';
import { movies } from '../data/movies';

export const Browse = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://occ-0-8407-2433.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZHclp-1JynUWnj9GdlOIvdYHUxD_rBSmk_Q53L_xPrPHOrv9tobzVvkBJCOshIp4P0hDc_3Zus-1ACtLZjGd0GF682Bf46iZQXVIk4hwY1mWsSG_9enpVAi_qNn08Nr-kAT2A.jpg?r=c68")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent">
            <div className="absolute bottom-1/4 left-12 max-w-xl">
              <h1 className="text-5xl font-bold mb-4">Stranger Things</h1>
              <p className="text-lg mb-6">
              Quando um menino desaparece, uma pequena cidade descobre um mistério envolvendo
              experimentos secretos, forças sobrenaturais aterrorizantes e uma garotinha estranha.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-80">
                  Assistir
                </button>
                <button className="bg-gray-500 bg-opacity-50 px-8 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-70">
                  Mais informações
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-bold mb-6">Em Alta</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};