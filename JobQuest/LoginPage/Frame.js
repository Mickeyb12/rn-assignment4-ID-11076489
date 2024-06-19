import { View, Text, StyleSheet, Image } from "react-native";

export default function Frame() {
  return (
    <View style={styles.container}>
      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>Or continue with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.imagesContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Applelogo.jpeg")}
        />
        <Image
          style={styles.image}
          source={require("../assets/Googlelogo.png")}
        />
        <Image
          style={styles.image}
          source={require("../assets/facebooklogo.jpeg")}
        />
      </View>
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Haven't an account?</Text>
        <Text style={styles.registerText}> Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  separatorText: {
    fontSize: 16,
    color: 'gray',
    marginHorizontal: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginVertical: 20,
  },
  image: {
    width: 40, 
    height: 40, 
    marginHorizontal: 10,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  accountText: {
    fontSize: 16,
    color: 'gray',
  },
  registerText: {
    fontSize: 16,
    color: '#356899',
    fontWeight: 'bold',
  },
});
