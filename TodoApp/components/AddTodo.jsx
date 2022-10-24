import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
export default function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");

  const inputHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={text}
        onChangeText={inputHandler}
        clearButtonMode="always"
      />
      <TouchableOpacity
        onPress={() => {
          handleAdd(text);
          setText("");
        }}
        style={{ backgroundColor: "#7d3980" }}
      >
        <Icon
          name="plus"
          size={40}
          style={{ textAlign: "center" }}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 50,
    marginVertical: 20,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "grey",
    fontSize: 18,
  },
});
