// src/screens/HomeScreen.jsx
import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, ScrollView, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
    const [text, setText] = useState('');

    const addTask = () => {
        if (text.trim() && !tasks.includes(text)) {
            setTasks([...tasks, text]);
            setText('');
        }
    };

    return (
        <MainLayout>
            <ScrollView style={styles.tasksContainer}>
                {tasks.map((task, index) => (
                    <View key={index} style={styles.task}>
                        <Text style={styles.taskText}>{task}</Text>
                    </View>
                ))}
            </ScrollView>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Add a new task..."
                placeholderTextColor="#999"  // Grey color for the placeholder text
            />
            <Button
                title="Add Task"
                onPress={addTask}
            />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    tasksContainer: {
        flex: 1,
        marginBottom: 20,
    },
    task: {
        backgroundColor: '#d0d0d0',  // Darker grey background for each task
        paddingVertical: 18,         // Vertical padding inside each task
        paddingHorizontal: 20,       // Horizontal padding inside each task
        marginBottom: 10,            // Space between tasks
        borderRadius: 10,            // Rounded corners for each task item
    },
    taskText: {
        fontSize: 16,
    },
    input: {
        height: 50,
        marginHorizontal: 12,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#ccc',
        backgroundColor: '#fff',     // White background for the input
        borderRadius: 0,             // No rounded corners for the text input
    },
});

export default HomeScreen;
