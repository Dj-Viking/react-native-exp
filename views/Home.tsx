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

  function createAddTodoPayload(inputText: string): AddTodoPayload {
    return {
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
  }

  return (
    <>
      <View style={ CellContainerStyles.container }>
        <Text>
          { `Todo to add: ${JSON.stringify(inputText, null, 2)}` }
        </Text>
      </View>
      <View style={ ListContainerStyles.container }>
        {/*TODO look up using flatlist for react native instead of creating a list like this because under the hood the transform might not
        be smart enough to use the react key properties that i put on every element here...even though thats what the compiler tells me to add, when I add it, it 
        still throws this warning....and it actually causes issues and thinks that all the elements should be rendered as the same thing.*/}
        {todos.map((todo: Todo, index: number, _array: Todo[]) => (
          <>
            <View key={(index + Date.now() / 9999).toString()} style={ ListCellStyles.container }>
              <TodoInput
                key={index}
                inputKey={(index + Date.now()).toString()}
                style={todo.styles}
                todo={todo}
              >
                <Text key={(index + Date.now() * 23948938493898).toString()}>
                  {todo.text} { Date.now().toString() }
                </Text>
              </TodoInput>
              <Button
                key={ (index + Date.now() / 191239238).toString() }
                onPress={() => dispatch(deleteTodo({ todo }))}
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
          onPress={() => dispatch(addTodo(createAddTodoPayload(inputText)))}
        />
      </View>
    </>
  );
}

export default Home;