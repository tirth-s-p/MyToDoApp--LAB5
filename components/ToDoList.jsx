// src/components/ToDoList.jsx
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.scrollView}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  task: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default ToDoList;
