// src/screens/AboutScreen.jsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const appName = "MyToDoApp-LAB5";
  const developerName = "Tirth Patel";
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text style={styles.text}>App Name: {appName}</Text>
      <Text style={styles.text}>Developer: {developerName}</Text>
      <Text style={styles.text}>Date: {currentDate}</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default AboutScreen;
