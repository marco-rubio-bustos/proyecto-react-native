import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <HomeScreen />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
