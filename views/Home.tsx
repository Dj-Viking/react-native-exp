import React from "react";
import { StatusBar } from 'expo-status-bar';
import TodoInput from "../components/TodoInput";
import { View, Text, TextInput, Button } from "react-native";
import { Todo, MyRootState, DeleteTodoPayload, AddTodoPayload } from "../types";
//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from "../actions/index";
import Styles from "../stylesheets"

const Home: React.FC<{}> = (): JSX.Element => {

  const { inputStyles, ListContainerStyles, CellContainerStyles, InputCellContainer, ListCellStyles } = Styles;
  const { inputTextChange, addTodo, deleteTodo } = Actions;
  const { inputText } = useSelector((state: MyRootState) => state.inputText);
  const { todos } = useSelector((state: MyRootState) => state.todos)
  const dispatch = useDispatch();

  return (
    <>
      <View style={ CellContainerStyles.container }>
        <Text>
          { `Todo to add: ${JSON.stringify(inputText, null, 2)}` }
        </Text>
      </View>
      <View style={ ListContainerStyles.container }>

        {todos.map((todo: Todo, index: number, _array: Todo[]) => (
          <>
            <View style={ ListCellStyles.container }>
              <TodoInput
                key={index}
                inputKey={index + 394398493}
                style={todo.styles}
                todo={todo}
                placeholder={todo.text}
              >
                {todo.text}
              </TodoInput>
              <Button
                key={ index + 1 }
                onPress={() => {
                  const payload: DeleteTodoPayload = { todo };
                  dispatch(deleteTodo(payload))
                }}
                title="delete todo"
              />
            </View>
          </>
        ))}

        <StatusBar style="auto" />

      </View>
      <View style={InputCellContainer.container}>
        <TextInput 
          style={inputStyles.input} 
          value={inputText}
          onChangeText={text => dispatch(inputTextChange(text))}
        />
        <Button 
          color="white"
          title="add todo" 
          onPress={() => {
            const payload: AddTodoPayload = {
              todo: {
                text: inputText,
                id: Date.now(),
                styles: {
                  color: "blue",
                  fontSize: 30,
                  marginRight: 100,
                  paddingLeft: 10, 
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