import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';

export default function Wishlist() {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    type WishlistItem = {
    id: string;
    title: string;
    director: string;
    format: string;
    };

    const [items, setItems] = useState<WishlistItem[]>([]);
    const [format, setFormat] = useState('DVD');

    const addItem = () => {
        if (!title) return;

    const newItem = {
      id: Date.now().toString(),
      title,
      director,
      format,
    };

        setItems([...items, newItem]);
        setTitle('');
        setDirector('');
        setFormat('');
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
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

            <Button title="Add to Wishlist" onPress={addItem} />

            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <Text style={{ marginTop: 10 }}>
                    {item.title} ({item.director}) ({item.format})
                </Text>
                )}
            />
        </View>
    );
}