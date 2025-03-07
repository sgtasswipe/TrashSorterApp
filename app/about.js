import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutWaste = () => {
    return (
        <ScrollView >
        <View style={styles.container}>
            <Text style={styles.header}>Waste sorting</Text>
            
            <View style={styles.section}>
            <Image style={styles.icon} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdZQrhtyHZUOG41Qz12dHeqxtsOJNcaFyPA&s" }} resizeMode='contain' />
                <Text style={styles.subHeader}>Cardboard</Text>
                <Text style={styles.text}>Cardboard can be recycled. Make sure to flatten boxes and remove any non-paper packing materials.</Text>
            </View>
            
            <View style={styles.section}>
            <Image style={styles.icon} source={{uri: "https://cbx-prod.b-cdn.net/COLOURBOX63616396.jpg?width=800&height=800&quality=70" }} resizeMode='contain' />
                
                <Text style={styles.subHeader}>Plastic</Text>
                <Text style={styles.text}>Plastic items should be cleaned and sorted by type. Check local guidelines for specific recycling rules.</Text>
            </View>
            
            <View style={styles.section}>
                <Image style={styles.icon}
                 source={{uri : "https://static.vecteezy.com/system/resources/previews/008/842/110/non_2x/illustration-graphic-of-tin-can-icon-free-vector.jpg"}}
                resizeMode='contain'/>
                <Text style={styles.subHeader}>Metal</Text>
                <Text style={styles.text}>Metal cans and containers should be rinsed and can be recycled. Remove any labels if possible.</Text>
            </View>
            <View style={styles.section}> 
                <Image style={styles.icon} 
                source={{uri : "https://media.istockphoto.com/id/1208597816/vector/organic-waste-compostable-sign-icon-symbol-apple-core-inside-circle-arrows-biodegradable.jpg?s=612x612&w=0&k=20&c=FPzM5_7B3brqbQJ-h5wGzUq0upRLCDTK8sXwiLCKMHI="}}
                resizeMode='contain'/>
                <Text style={styles.subHeader}>Bio-waste</Text>
                <Text style={styles.text}>Bio-waste is all type of organic waste. Such as food scraps, old flowers, so on. Organic bio-waste goes into green biodegrable bags, and is placed into organic waste bins, usally with a brown lit. </Text>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
    },
    icon: {
        width: 150, 
        height: 150,
        borderRadius: 10
    }
    }
);

export default AboutWaste;