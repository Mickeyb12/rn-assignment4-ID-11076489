import { View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

export default function Details() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={styles.detailscontainer}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={() => {}} color="#356899" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailscontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 50,
        padding: 10,
        width: '100%',
        backgroundColor: '#FAFAFD',
        
    },
    text: {
        fontSize: 20,
        color: '#333333',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: 'white',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
    }
});
