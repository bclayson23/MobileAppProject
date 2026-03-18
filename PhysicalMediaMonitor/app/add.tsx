import { Picker } from '@react-native-picker/picker';
import { useContext, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { MovieContext } from '../data/MovieContext';

export default function Add() {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [format, setFormat] = useState('DVD');

    const { addMovie } = useContext(MovieContext);   // <-- THIS WAS MISSING

    return (
        <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Add Movie
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

        <Button
            title="Save Movie"
            onPress={() => {
                const newMovie = {
                id: Date.now().toString(),
                title,
                director,
                format,
                };

                addMovie(newMovie);

                setTitle('');
                setDirector('');

                alert('Movie added!');
            }}
        />
        </View>
    );
}