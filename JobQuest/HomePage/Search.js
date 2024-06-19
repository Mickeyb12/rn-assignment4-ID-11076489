import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Search() {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/Searchmoji.png')} style={styles.searchMoji} />
        <TextInput style={styles.inputStyles} placeholder="Search a job or position" placeholderTextColor="gray" />
      </View>
      <TouchableOpacity style={styles.imgButtonStyles}>
        <Image source={require('../assets/bx_slider.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 35,
    paddingHorizontal: 15,
  },
  inputContainer: {
    backgroundColor: '#F2F2F3',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    width: '77%',
  },
  searchMoji: {
    width: 20,
    height: 20,
    tintColor: 'gray', 
  },
  imgButtonStyles: {
    backgroundColor: '#F2F2F3',
    padding: 6,
    borderRadius: 10,
  },
  inputStyles: {
    flex: 1,
    marginLeft: 10,
    color: 'black', 
    fontSize: 16,
  },
});
