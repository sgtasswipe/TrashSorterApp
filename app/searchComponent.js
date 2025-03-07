import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, Button } from 'react-native';
import { db } from '../firebaseconfig'; // Import Firestore config
import { collection, getDocs, addDoc } from 'firebase/firestore';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [wasteData, setWasteData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  // Fetch data from Firestore on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'wasteItems')); // Get the 'wasteItems' collection
        const dataList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setWasteData(dataList);
        setFilteredResults(dataList);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = wasteData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    
    setFilteredResults(filtered);
  };

  // Function to add a waste item to Firestore
  const addWasteItem = async (item) => {
    try {
      const docRef = await addDoc(collection(db, 'wasteItems'), item); // Add new item to the collection
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding waste item:', error);
    }
  };

  // Example usage to add a new item (this could be triggered by a button click)
  const handleAddWasteItem = () => {
    addWasteItem({
      name: 'New Item',
      category: 'Plastic',
      instructions: 'Recycle in the plastic bin.'
    });
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Search for an item..."
        value={query}
        onChangeText={handleSearch}
        style={{ borderBottomWidth: 1, padding: 8, marginBottom: 10 }}
      />
      
      <Button title="Add New Waste Item" onPress={handleAddWasteItem} />

      <FlatList
        data={filteredResults}
        keyExtractor={(item) => item.id} // Use the unique id from Firestore
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Instructions: {item.instructions}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchComponent;
