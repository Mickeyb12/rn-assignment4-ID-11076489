import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const sections = [
    {
        key: 1,
        logo: require("../assets/burgerkinglogo.jpeg"),
        position: "Jr Executive",
        company: "Burger King",
        salary: "$96,000/y",
        location: "Los Angeles, US",
    },
    {
        key: 2,
        logo: require("../assets/beatslogo.jpeg"),
        position: "Product Manager",
        company: "Beats",
        salary: "$86,000/y",
        location: "Florida, US",
    },
    {
        key: 3,
        logo: require("../assets/facebooklogo.jpeg"),
        position: "Product Manager",
        company: "Facebook",
        salary: "$84,000/y",
        location: "Florida, US",
    }
];

const Section = ({ item }) => {
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.row}>
                <Image source={item.logo} style={styles.logo} />
                <View style={styles.textContainer}>
                    <Text style={styles.position}>{item.position}</Text>
                    <Text style={styles.company}>{item.company}</Text>
                </View>
                <View style={styles.salaryContainer}>
                    <Text style={styles.salary}>{item.salary}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
            </View>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.popularText}>Popular Jobs</Text>
                <Text style={styles.seeAllText}>See All</Text>
            </View>
            <FlatList
                data={sections}
                renderItem={({ item }) => <Section item={item} />}
                keyExtractor={item => item.key.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FAFAFD',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    popularText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    seeAllText: {
        fontSize: 12,
        color: 'gray',
    },
    listContainer: {
        width: '100%',
    },
    sectionContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 16,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    position: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginBottom: 1,
    },
    company: {
        fontSize: 13,
        color: 'gray',
        marginBottom: 5,
    },
    salaryContainer: {
        alignItems: 'flex-end',
    },
    salary: {
        fontWeight: 'bold', 
        fontSize: 12,
        color: 'black',
    },
    location: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
    },
});
