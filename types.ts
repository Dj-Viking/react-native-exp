import { ReactNode } from "react";
import { TextInputProps, TextProps } from  "react-native";

export interface Todo extends Object {
  text: string;
  id?: number;
  styles?: {
    color?: string;
    fontSize?: number;
    marginRight?: number;
    marginLeft?: number;
    paddingLeft?: number
  }
}

// export class Todo implements Todo {
//   constructor(args: Todo) {
//     Object.assign(this, {...args})
//   }
// }

export interface TodoItemProps extends TextInputProps {
  inputKey?: number | string
  style: Todo["styles"]
  todo: Todo
  children?: ReactNode
}

export interface TodosAction {
  type: "add" | "delete"
  payload: DeleteTodoPayload | AddTodoPayload
}

export interface AddTodoPayload {
  todo?: Todo
}
export interface DeleteTodoPayload {
  input?: never
  todo?: Todo
}

export interface TodosState {
  todos: Array<Todo>
  
}

export interface InputTextState {
  inputText: string;
}

export interface InputTextAction {
  type: "change" | "asdf"
  payload: string;
}

export interface MyRootState {
  inputText: InputTextState;
  todos: TodosState
}