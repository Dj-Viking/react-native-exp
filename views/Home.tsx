import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Todo, MyRootState } from "../types";
//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux';
import {
  Actions
} from "../actions/index";

const Home: React.FC<{}> = () => {

  const {
    inputTextChange,
    addTodo
  } = Actions;

  const inputTextState = useSelector((state: MyRootState) => state.inputText);
  const todosState = useSelector((state: MyRootState) => state.todos)
  const dispatch = useDispatch();
  
  const {
    inputText
  } = inputTextState;

  const {
    todos
  } = todosState;

  const inputStyles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      color: "white",
      borderWidth: 1,
      borderColor: "black",
      padding: 10,
    },
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <>
      <View style={ styles.container }>
        <Text>
          {JSON.stringify(inputText, null, 2)}
        </Text>
        
        {todos.map((todo: Todo, index: number) => (
          <Text 
            key={ index } 
            style={ todo.styles }
          > 
            { todo.text }
          </Text>
        ))}
        <TextInput 
          style={inputStyles.input} 
          value={inputText} 
          onChange={(event: any) => {
            dispatch(inputTextChange(event.target.value));
          }}
        />
        <StatusBar style="auto" />
      </View>
      <View>
        <Button title="add todo" 
        onPress={() => {
          dispatch(addTodo({
            text: inputText,
            styles: {
              color: "white",
              fontSize: 30
            }
          }));
        }}
        />
      </View>
    </>
  );
}

export default Home;