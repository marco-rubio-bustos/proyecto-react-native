import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Mi App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#6200ee",
    padding: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
