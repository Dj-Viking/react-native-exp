import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ButtonProps, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import Input from "./components/Input";



export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const todos = [
    {
      text: "heres a todo",
      color: "white"
    },
    {
      text: "todoo 2",
      color: "white"
    }
  ];
  

  return (
    <View style={styles.container}>
      
      {
        todos.map(todo => (
          <Text style={{ color: todo.color }}> {todo.text}</Text>
        ))
      }

      <Input/>

      <StatusBar style="auto" />
    </View>
  );
}


