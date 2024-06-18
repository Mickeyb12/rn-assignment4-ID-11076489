import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header1 from "./HomePage/Header1";

export default function App() {
  return (
    <>
        <ScrollView>
          <View style={styles.container}>
            <Header1/>
           
          </View>
        </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "flex-start",
    paddingTop: 52, 
    padding: 20, 
    backgroundColor:"#F7F0E8"
  }
});