import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState('');

  const addProduct = () => {
    if (text.trim()) {
      setProducts([...products, { id: Date.now().toString(), name: text }]);
      setText('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        📝 Список продуктов
      </Text>
      
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Введите продукт"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
          fontSize: 16
        }}
      />
      
      <Button title="Добавить" onPress={addProduct} />
      
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18, marginTop: 10, padding: 5 }}>
            • {item.name}
          </Text>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}
 
