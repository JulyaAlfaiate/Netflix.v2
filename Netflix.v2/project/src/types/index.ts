export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  genre: string;
  year: number;
  seasons: number;
  cast: string;
  creator: string;
}

export interface User {
  email: string;
  isAuthenticated: boolean;
}