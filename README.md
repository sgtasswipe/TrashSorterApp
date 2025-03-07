# 🗑️ Trash Sorter App  

##  Description  
The **Trash Sorter App** is a mobile application built with **React Native (Expo)** that helps users sort waste correctly by using a **machine learning model** to classify trash items. The app provides suggestions for proper disposal based on the image classification results, enabling users to sort their trash effectively.

### Features:
- **Search function:** Allows users to search for items they are unsure how to sort. Fetches data from Firestore dynamically.
- **Camera Integration:** Allows users to take a picture of an item for classification.
- **React Navigation:** Includes smooth navigation between different screens within the app.

## ⚙ Tech Stack
- **Frontend:** React Native (Expo)
- **Machine Learning:** TensorFlow.js for on-device model inference
- **Backend (optional future use):** Firebase (for user data, photo storage, etc.)
- **Model Training:** Python (Keras and TensorFlow)

## Upcoming Changes
- **Fine-tuning my model:**    
-  **Image Classification:** Uses a trained machine learning model to classify trash items (plastic, cardboard, metal, organic waste).
- **Sorting Suggestions:** Based on the classification, the app provides the user with instructions on how to dispose of the item.
- **Local Storage:** Saves user preferences for sorting methods and suggestions.
  
