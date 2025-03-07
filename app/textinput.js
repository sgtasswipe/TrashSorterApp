import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseconfig";

const TextUploadScreen = () => {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([])

  const saveTextToFirebase = async () => {
    if (!text.trim()) {
      Alert.alert("Error", "Please enter some text.");
      return;
    }

    try {
      await addDoc(collection(db, "texts"), { content: text });
      Alert.alert("Success", "Text saved to Firebase!");
      setText(""); // Clear input field
    } catch (error) {
      Alert.alert("Error", "Failed to save text.");
      console.error(error);
    }
  };

  const getTextFromFireStore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "texts"));
      const dataText = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTexts(dataText); // Set the fetched texts into state
      console.log(texts)
    } catch (error) {
      console.error("Error fetching texts: ", error);
    }
  } 

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter text..."
        style={{ borderWidth: 1, padding: 10, width: "80%", marginBottom: 10 }}
      />
      <Button title="Save to Firebase" onPress={saveTextToFirebase} />
      <Button title="Get texts from Firebase" onPress={getTextFromFireStore}> </Button>
      <View style={{ marginTop: 20 }}>
        {texts.length > 0 ? (
          texts.map((textItem) => (
            <Text key={textItem.id} style={{ marginBottom: 5 }}>
              {textItem.content}
            </Text>
          ))
        ) : (
          <Text>No texts found!</Text>
        )}
      </View>
      </View> 
  )}



export default TextUploadScreen;
