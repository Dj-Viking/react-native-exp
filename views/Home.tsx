import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button } from "react-native";
import { Todo, MyRootState, DeleteTodoPayload, AddTodoPayload } from "../types";
//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from "../actions/index";
import Styles from "../stylesheets"

const Home: React.FC<{}> = (): JSX.Element => {

  const { inputStyles, viewStyles } = Styles;
  const { inputTextChange, addTodo, deleteTodo } = Actions;
  const { inputText } = useSelector((state: MyRootState) => state.inputText);
  const { todos } = useSelector((state: MyRootState) => state.todos)
  const dispatch = useDispatch();

  return (
    <>
      <View style={ viewStyles.container }>
        <Text>
          { JSON.stringify(inputText, null, 2) }
        </Text>
        
        {todos.map((todo: Todo, index: number) => (
          <>
            <TextInput 
              key={ index } 
              style={ todo.styles }
              onChangeText={ text => dispatch(inputTextChange(text)) }
            > 
              {todo.text}
            </TextInput>
            <Button
              key={ index + 234234 }
              onPress={() => {
                const payload: DeleteTodoPayload = {
                  todo
                };
                dispatch(deleteTodo(payload))
              }}
              title="delete todo"
            />
          </>
        ))}
        <TextInput 
          style={inputStyles.input} 
          value={inputText}
          onChangeText={text => dispatch(inputTextChange(text))}
        />
        <StatusBar style="auto" />
      </View>
      <View>
        <Button title="add todo" 
        onPress={() => {
          const payload: AddTodoPayload = {
            todo: {
              text: inputText,
              id: Date.now(),
              styles: {
                color: "white",
                fontSize: 30
              }
            }
          }
          dispatch(addTodo(payload));
        }}
        />
      </View>
    </>
  );
}

export default Home;