import { useContext, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { MovieContext } from '../data/MovieContext';

export default function Collection() {
  const { movies, removeMovie } = useContext(MovieContext);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');

  const sortedMovies = [...movies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const filteredMovies = sortedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f5f5' }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 10,
        }}
      >
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
          <View
            style={{
              marginTop: 12,
              padding: 12,
              borderRadius: 10,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#ddd',

              // shadow (iOS)
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 4,

              // shadow (Android)
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {item.title}
            </Text>

            <Text style={{ color: '#666', marginTop: 4 }}>
              {item.director} • {item.format}
            </Text>

            <Pressable
              onPress={() => {
                removeMovie(item.id);
              }}
              style={{
                marginTop: 8,                 // spacing above
                alignSelf: 'flex-start',      // align left
                backgroundColor: 'red',
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Delete
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
