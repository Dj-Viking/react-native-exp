import React from "react";
import { StatusBar } from 'expo-status-bar';
// import TodoInput from "../components/TodoInput";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { Todo, MyRootState, AddTodoPayload } from "../types";
import TodoList from "../components/TodoList";
//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from "../actions/index";
import Styles from "../stylesheets"
const { inputStyles, ListContainerStyles, CellContainerStyles, InputCellContainer, ListCellStyles, TodoItemStyles } = Styles;
const { inputTextChange, addTodo } = Actions;

const Home: React.FC<{}> = (): JSX.Element => {

  const { inputText } = useSelector((state: MyRootState) => state.inputText);
  const { todos } = useSelector((state: MyRootState) => state.todos)
  const dispatch = useDispatch();

  function createAddTodoPayload(inputText: string): AddTodoPayload {
    return {
      todo: {
        text: inputText,
        id: Date.now(),
      }
    };
  }

  return (
    <>
      <View style={ CellContainerStyles.container }>
        <Text>
          { `Todo to add: ${JSON.stringify(inputText, null, 2)}` }
        </Text>
      </View>
      <View style={ ListContainerStyles.container }>
        
        <FlatList 
          data={todos}
          renderItem={({ item }) => (
            <TodoList todo={item} />
          )}
          keyExtractor={(item: Todo) => item.id?.toString() as string}
        />

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
          onPress={() => dispatch(addTodo(createAddTodoPayload(inputText)))}
        />
      </View>
    </>
  );
}

export default Home;