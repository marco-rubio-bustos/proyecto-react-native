import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Mi App con React Native 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6200ee",
    padding: 15,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
