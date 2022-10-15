import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import AddTodo from "./AddTodo";
import Icon from "react-native-vector-icons/Feather";

export default function TodoList() {
  const [todo, setTodo] = useState([
    { task: "shopping", key: 1 },
    { task: "grocery", key: 2 },
    { task: "cooking", key: 3 },
  ]);
  const handleDelete = (id) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != id);
    });
  };
  const handleAdd = (task) => {
    if (task.length != 0) {
      setTodo((todo) => {
        return [{ task: task, key: Math.random() }, ...todo];
      });
    } else {
      Alert.alert("OOPS!", `Todo can't be empty`, [{ text: "okay" }]);
    }
  };
  return (
    <View style={styles.container}>
      <AddTodo handleAdd={handleAdd} />
      <FlatList
        data={todo}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text style={styles.text}>{item.task}</Text>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Icon
                name="trash"
                size={25}
                color="red"
                onPress={() => handleDelete(item.key)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  list: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    margin: 10,
    borderLeftWidth: 3,
    borderStyle: "solid",
    borderColor: "#a84777",
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
  },
});
