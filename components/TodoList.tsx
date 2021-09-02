import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { MyRootState, Todo } from "../types";
import Styles from "../stylesheets"
import { Actions } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { ListCellStyles } from "../stylesheets/ListCellStyles";
const { TodoItemStyles } = Styles
const { deleteTodo, inputTextChange } = Actions;

const TodoList: React.FC<{todo: Todo}> = ({ todo }) => {
  const dispatch = useDispatch();
    
  return (
    <View style={ ListCellStyles.container }>
      <TextInput
        style={TodoItemStyles.item}
        onChangeText={(text: string) => dispatch(inputTextChange(text))}
      >
        { todo.text }
      </TextInput>
      <Button
        onPress={() => dispatch(deleteTodo({ todo }))}
        title="delete todo"
        color="blue"
      />
    </View>
  )
};

export default TodoList;