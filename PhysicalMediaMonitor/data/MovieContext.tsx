import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useEffect, useState } from 'react';

type Movie = {
  id: string;
  title: string;
  director: string;
  format: string;
};

type MovieContextType = {
  movies: Movie[];
  wishlist: Movie[];
  addMovie: (movie: Movie) => void;
  addToWishlist: (movie: Movie) => void;
  removeFromWishlist: (id: string) => void;
  removeMovie: (id: string) => void;
};

export const MovieContext = createContext<MovieContextType>({
  movies: [],
  wishlist: [],
  addMovie: () => {},
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  removeMovie: () => {},
});

export function MovieProvider({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [wishlist, setWishlist] = useState<Movie[]>([]);

  const removeMovie = (id: string) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  useEffect(() => {
    const loadData = async () => {
      const storedMovies = await AsyncStorage.getItem('movies');
      const storedWishlist = await AsyncStorage.getItem('wishlist');

      console.log('Stored wishlist:', storedWishlist);

      if (storedMovies) setMovies(JSON.parse(storedMovies));
      if (storedWishlist) setWishlist(JSON.parse(storedWishlist));

      setLoaded(true);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem('movies', JSON.stringify(movies));
  }, [movies, loaded]);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist, loaded]);

  const addMovie = (movie: Movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  const addToWishlist = (movie: Movie) => {
    setWishlist((prev) => [...prev, movie]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        wishlist,
        addMovie,
        addToWishlist,
        removeFromWishlist,
        removeMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}