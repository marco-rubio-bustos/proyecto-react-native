import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./pages/HomeScreen";
import { UIProvider } from "./context";

export default function App() {
  return (
    <UIProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Navbar />
          <HomeScreen />
        </View>
      </SafeAreaView>
    </UIProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
