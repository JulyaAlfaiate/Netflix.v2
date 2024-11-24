import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative group">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-[200px] object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="text-lg font-bold">{movie.title}</h3>
          <div className="flex gap-2 mt-2">
            <button className="bg-white text-black px-4 py-1 rounded-md flex items-center gap-1 hover:bg-opacity-80">
              <Play className="w-4 h-4" /> Iniciar
            </button>
            <button className="bg-gray-500 bg-opacity-50 px-4 py-1 rounded-md flex items-center gap-1 hover:bg-opacity-70">
              <Info className="w-4 h-4" /> Mais informações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};