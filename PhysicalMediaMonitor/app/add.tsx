import { Picker } from '@react-native-picker/picker';
import { useContext, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { MovieContext } from '../data/MovieContext';

export default function Add() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [format, setFormat] = useState('DVD');
  const [message, setMessage] = useState('');

  const { addMovie } = useContext(MovieContext);

  const handleAdd = () => {
    if (!title) return;

    const newMovie = {
      id: Date.now().toString(),
      title,
      director,
      format,
    };

    addMovie(newMovie);

    setTitle('');
    setDirector('');
    setFormat('DVD');

    setMessage('Movie added to collection!');
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
        Add a Movie
      </Text>

      <TextInput
        placeholder="Title"
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
            onPress={handleAdd}
            style={{
                marginTop: 15, 
                backgroundColor: '#1976d2',
                paddingVertical: 10,
                borderRadius: 8,
                alignItems: 'center', 
            }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Save Movie
                </Text>
        </Pressable>

      {/* Message display */}
      {message ? (
        <Text style={{ color: 'green', marginTop: 10 }}>
          {message}
        </Text>
      ) : null}
    </View>
  );
}