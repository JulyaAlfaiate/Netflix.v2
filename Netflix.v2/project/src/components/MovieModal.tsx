import React from 'react';
import { X, Play } from 'lucide-react';
import { Movie } from '../types';

interface MovieModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-[400px]">
          <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-900 to-transparent">
            <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
            <button className="bg-white text-black px-8 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-80">
              <Play className="w-5 h-5" /> Assistir
            </button>
          </div>
        </div>
        
        <div className="p-8 pt-6">
          <div className="flex gap-4 text-sm mb-6">
            <span className="text-green-500">98% de Aprovação</span>
            <span>{movie.year}</span>
            <span>{movie.seasons} Temporadas</span>
            <span className="border border-gray-600 px-1">HD</span>
          </div>
          
          <p className="text-lg mb-6">{movie.description}</p>
          
          <div className="space-y-4">
            <div>
              <span className="text-gray-400">Gênero:</span>{" "}
              <span>{movie.genre}</span>
            </div>
            <div>
              <span className="text-gray-400">Cast:</span>{" "}
              <span>{movie.cast}</span>
            </div>
            <div>
              <span className="text-gray-400">Criado por:</span>{" "}
              <span>{movie.creator}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};