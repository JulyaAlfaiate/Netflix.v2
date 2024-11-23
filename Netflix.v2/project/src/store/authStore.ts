import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  login: async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ user: { email, isAuthenticated: true } });
  },
  logout: () => set({ user: null }),
}));