import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState('');

  const addProduct = () => {
  if (!text.trim()) return;

  setProducts(prev => [
    { id: Date.now().toString(), name: text },
    ...prev
  ]);

  setText('');
};

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Список продуктов</Text>
      
      <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, padding: 10, marginRight: 10 }}
          value={text}
          onChangeText={setText}
          placeholder="Введите продукт"
        />
        <Button title="Добавить" onPress={addProduct} />
      </View>
      
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={{ fontSize: 18, marginTop: 5 }}>• {item.name}</Text>}
      />
    </View>
  );
}
