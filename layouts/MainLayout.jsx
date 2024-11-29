// src/layouts/MainLayout.jsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text>LAB5</Text>
  </View>
);

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
});

export default MainLayout;
