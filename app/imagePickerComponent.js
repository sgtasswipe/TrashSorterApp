import React, { useState, useEffect } from "react";
import { View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {supabase} from "./supabase.js"

const ImagePickerComponent = () => {
  const [image, setImage] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  // Request permission to access the camera and gallery
  useEffect(() =>  {
    requestPermission() 
  }, [])

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "You need to allow access to your photos.");
    }
  } 

  // Function to pick an image from the gallery
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };  

  // Function to take a photo with the camera
  const takePhoto = async () => {
      const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  /* const UploadScreen = async() => {
    const [uploadedUrl, setUploadedUrl] = useState(null);

    const fileName = `user_${Date.now()}.jpg`;
    const response = await fetch(uri);
    const blob = await response.blob();

    const { data, error } = await supabase.storage.from('images').upload(fileName, blob, {
      contentType: 'image/jpeg',
    });

    if (error) {
      console.error('Upload error:', error);
    } else {
      const publicUrl = supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
      setUploadedUrl(publicUrl);
      console.log('Uploaded to:', publicUrl);
    }
  };*/ 
  const uploadImage = async () => {
    if (!image) {
      Alert.alert("No Image", "Please select or take an image first.");
      return;
    }

    try {
      const response = await fetch(image);
      const blob = await response.blob();

      const fileName = `user_${Date.now()}.jpg`;

      const { data, error } = await supabase.storage
        .from("images")
        .upload(fileName, blob, { contentType: "image/jpeg" });

      if (error) {
        throw error;
      }

      // Get public URL of the uploaded image
      const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(fileName);
      setUploadedUrl(publicUrlData.publicUrl);
      console.log("Uploaded to:", publicUrlData.publicUrl);

    } catch (error) {
      console.error("Upload failed:", error);
      Alert.alert("Upload Failed", error.message);
    }
  };
  

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Button title="Pick an Image from Gallery" onPress={pickImage} />
      <Button title="Take a Photo" onPress={takePhoto} />
      <Button title="Save your photo" onPress={uploadImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 10 }} />}
      {uploadedUrl && <Image source={{ uri: uploadedUrl }} style={{ width: 200, height: 200, marginTop: 10 }} />}
    </View>
  );
};

export default ImagePickerComponent;
