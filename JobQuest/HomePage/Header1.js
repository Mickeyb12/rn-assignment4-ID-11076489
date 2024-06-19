import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.header1Container}>
            <View>
                <Text style={styles.bigText}>Eric Atsu</Text>
                <Text style={[styles.grayText, styles.emailText]}>eric@gmail.com</Text>
            </View>
            <View style={styles.imgStyles}>
                <Image source={require('../assets/Profilepic.jpeg')} style={styles.profilePic} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header1Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderColor: 'black',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    bigText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    grayText: {
        color: 'gray',
    },
    emailText: {
        fontSize: 18, 
    },
    imgStyles: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});
