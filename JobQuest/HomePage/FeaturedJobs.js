import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const sections = [
    {
        key: 1,
        logo: require("../assets/facebooklogo.jpeg"),
        position: "Software Engineering",
        company: "Facebook",
        salary: "$180,000",
        location: "Accra, Ghana",
    },
    {
        key: 2,
        logo: require("../assets/Googlelogo.png"),
        position: "Software Engineering",
        company: "Google",
        salary: "$160,000",
        location: "Accra, Ghana",
    }
];

const Section = ({ item }) => {
    return (
        <View style={[styles.sectionContainer, item.company === "Facebook" ? styles.facebookContainer : styles.googleContainer]}>
            <View style={styles.row}>
                <View style={[styles.logoContainer, item.company === "Google" ? styles.googleLogoContainer : null]}>
                    <Image source={item.logo} style={styles.logo} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.position, item.company === "Google" && styles.blackText]}>{item.position}</Text>
                    <Text style={[styles.company, item.company === "Google" && styles.blackText]}>{item.company}</Text>
                </View>
            </View>
            <View style={styles.salaryLocationContainer}>
                <Text style={[styles.salary, item.company === "Google" && styles.blackText]}>{item.salary}</Text>
                <Text style={[styles.location, item.company === "Google" && styles.blackText]}>{item.location}</Text>
            </View>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.featuredRow}>
                <Text style={styles.featuredText}>Featured Jobs</Text>
                <Text style={styles.seeAllText}>See All</Text>
            </View>
            <View style={styles.container}>
                {sections.map(section => (
                    <Section key={section.key} item={section} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        backgroundColor: 'white',
    },
    featuredRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0, 
        marginBottom: 10,
        width: '100%',
    },
    featuredText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    seeAllText: {
        fontSize: 12,
        color: 'gray',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    sectionContainer: {
        width: 240, 
        height: 140, 
        paddingLeft: 12,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    facebookContainer: {
        backgroundColor: 'rgba(24, 119, 242, 1)', 
        marginLeft: 0, 
        marginRight: 10, 
    },
    googleContainer: {
        backgroundColor: 'rgba(62, 39, 160, 1)', 
        marginLeft: 10, 
        marginRight: 20, 
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoContainer: {
        width: 40,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleLogoContainer: {
        backgroundColor: 'white', 
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
    },
    position: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    company: {
        color: 'white',
        fontSize: 12,
        marginTop: 1,
    },
    salaryLocationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10, 
    },
    salary: {
        color: 'white',
        fontSize: 14,
    },
    location: {
        color: 'white',
        fontSize: 14,
    },
    blackText: {
        color: 'white',
    }
});
