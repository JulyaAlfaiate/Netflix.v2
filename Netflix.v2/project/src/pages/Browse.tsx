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
            backgroundImage: 'url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200&auto=format&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent">
            <div className="absolute bottom-1/4 left-12 max-w-xl">
              <h1 className="text-5xl font-bold mb-4">Stranger Things</h1>
              <p className="text-lg mb-6">
                When a young boy vanishes, a small town uncovers a mystery involving
                secret experiments, terrifying supernatural forces, and one strange little girl.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-80">
                  Play
                </button>
                <button className="bg-gray-500 bg-opacity-50 px-8 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-70">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};