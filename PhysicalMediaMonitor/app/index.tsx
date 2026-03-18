import { useContext, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { MovieContext } from '../data/MovieContext';

export default function Collection() {
  const { movies } = useContext(MovieContext);
  const [search, setSearch] = useState('');

  const sortedMovies = [...movies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const filteredMovies = sortedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        My Collection
      </Text>

      <TextInput
        placeholder="Search by title..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          marginTop: 10,
          padding: 10,
          borderRadius: 5,
        }}
      />

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ marginTop: 10 }}>
            {item.title} ({item.format})
          </Text>
        )}
      />
    </View>
  );
}
