import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState('');

  const addProduct = () => {
    if (text.trim() === '') return;
    const newProduct = {
      id: Date.now().toString(),
      name: text.trim()
    };
    setProducts([newProduct, ...products]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Список продуктов</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Введите продукт..."
          placeholderTextColor="#999"
        />
        <Button title="Добавить" onPress={addProduct} />
      </View>
      
      {products.length === 0 ? (
        <Text style={styles.emptyText}>Пока ничего нет. Добавьте продукты!</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>• {item.name}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    fontSize: 16
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2
  },
  itemText: {
    fontSize: 18
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 50,
    fontSize: 16
  }
});
