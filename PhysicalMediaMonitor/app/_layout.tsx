import { Tabs } from 'expo-router';
import { MovieProvider } from '../data/MovieContext';

export default function Layout() {
  return (
    <MovieProvider>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Collection' }} />
        <Tabs.Screen name="add" options={{ title: 'Add Movie' }} />
        <Tabs.Screen name="wishlist" options={{ title: 'Wishlist' }} />
      </Tabs>
    </MovieProvider>
  );
}