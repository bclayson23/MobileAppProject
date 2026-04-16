import { Picker } from '@react-native-picker/picker';
import { useContext, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { MovieContext } from '../data/MovieContext';

export default function Wishlist() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [format, setFormat] = useState('DVD');
  const [message, setMessage] = useState('');

  const { wishlist, addToWishlist, addMovie, removeFromWishlist } = useContext(MovieContext);

  const addItem = () => {
    if (!title) return;

    const newItem = {
      id: Date.now().toString(),
      title,
      director,
      format,
    };

    addToWishlist(newItem);

    setTitle('');
    setDirector('');
    setFormat('DVD');

    setMessage('Movie added to wishlist!');
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f5f5' }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 10,
        }}
      >
        Wishlist
      </Text>

      <TextInput
        placeholder="Movie Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginTop: 10, padding: 10 }}
      />

      <TextInput
        placeholder="Director"
        value={director}
        onChangeText={setDirector}
        style={{ borderWidth: 1, marginTop: 10, padding: 10 }}
      />

      <Text style={{ marginTop: 10 }}>Format:</Text>

      <Picker
        selectedValue={format}
        onValueChange={(itemValue) => setFormat(itemValue)}
      >
        <Picker.Item label="DVD" value="DVD" />
        <Picker.Item label="Blu-ray" value="Blu-ray" />
        <Picker.Item label="4K" value="4K" />
      </Picker>

        <Pressable
            onPress={addItem}
            style={{
                marginTop: 15,
                backgroundColor: '#1976d2',
                paddingVertical: 10,
                borderRadius: 8,
                alignItems: 'center',
            }}
            >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Add to Wishlist
            </Text>
        </Pressable>

      {/* Message display */}
      {message ? (
        <Text style={{ color: 'green', marginTop: 10 }}>
          {message}
        </Text>
      ) : null}

      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginTop: 12 }}>
                <Text style={{ fontSize: 18 }}>{item.title}</Text>
                <Text style={{ color: 'gray' }}>
                {item.director} • {item.format}
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 8, gap: 10 }}>
                    <Pressable
                        onPress={() => {
                        addMovie(item);
                        removeFromWishlist(item.id);
                        setMessage('Moved to collection!');
                        }}
                        style={{
                        backgroundColor: '#007bff',
                        paddingVertical: 6,
                        paddingHorizontal: 12,
                        borderRadius: 6,
                        }}
                    >
                        <Text style={{ color: 'white' }}>Add to Collection</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => {
                        removeFromWishlist(item.id);
                        }}
                        style={{
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
          </View>
        )}
      />
    </View>
  );
}