import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My TODO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a84777",
    padding: 20,
    // marginTop: 40,
  },
  text: {
    // flex: 1,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,
    color: "#fff",
  },
});
