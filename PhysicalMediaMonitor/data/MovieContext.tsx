import { createContext, ReactNode, useState } from 'react';

type Movie = {
  id: string;
  title: string;
  director: string;
  format: string;
};

type MovieContextType = {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
};

export const MovieContext = createContext<MovieContextType>({
  movies: [],
  addMovie: () => {},
});

export function MovieProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([
    
  ]);

  const addMovie = (movie: Movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
}