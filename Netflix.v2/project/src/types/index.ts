export interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  genre: string;
  year: number;
}

export interface User {
  email: string;
  isAuthenticated: boolean;
}