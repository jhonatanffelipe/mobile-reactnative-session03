import React, { useState, useEffect, useCallback } from "react";
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function App() {
  const baseUrl = 'http://localhost:3333'
  const [projects, setProjects] = useState([])

  const handleAddProject = useCallback(async () => {

    fetch(`${baseUrl}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: `Novo projeto ${Date.now()}`,
        owner: 'Jhonatan'
      })
    }).then((response) => {
      return response.json();
    }).then(data => {
      const project = data
      setProjects([...projects, project])
    })
  })


  useEffect(() => {
    fetch(`${baseUrl}/projects`, {
      method: 'GET'
    })
      .then((response) => {
        return response.json();
      })
      .then(data => {
        setProjects(data)
      });
  }, [])

  return (
    <>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <SafeAreaView style={styles.container} >

        <Text style={styles.title}>My Projects</Text>

        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item }) => (
            <Text style={styles.project}>{item.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    padding: 15
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15
  },

  project: {
    color: '#FFF',
    fontSize: 20,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 20
  }
})