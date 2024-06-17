import { View, Text, StyleSheet } from "react-native";

export default function Header() { 
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.jobizzText}>Jobizz</Text>
        <Text style={styles.bigText}>Welcome Back👋</Text>
        <Text style={styles.subtitleText}>Let's Login. Apply to Jobs!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  textContainer: {
    marginTop: 50,  
  },
  jobizzText: {
    color: "#356899",
    fontSize: 20, 
    fontweight: 'bold', 
  },
  bigText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 7,  
  },
  subtitleText: {
    color: "#5A5A5A",
    marginTop: 5,  
  },
});
