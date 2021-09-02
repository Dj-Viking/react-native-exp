import React from "react";
import { TodoItemProps } from "../types";
import { TextInput } from "react-native";
import { Actions } from "../actions/index";
import { useDispatch } from 'react-redux';

const TodoItem: React.FC<TodoItemProps> = ({todo, children}) => {

  const { inputTextChange } = Actions;
  const dispatch = useDispatch();

  return (
    <TextInput 
      style={ todo.styles }
      onChangeText={ text => dispatch(inputTextChange(text)) }
    > 
      {children} 
    </TextInput>
  );
}

export default TodoItem;