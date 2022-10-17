import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";


export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <SafeAreaView style={styles.container} >
        <Text style={styles.title}>Helo GoStack</Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  }
})