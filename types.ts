export interface Todo {
  text: string;
  styles: {
    color: string;
    fontSize: number;
  }
}
export interface TodosAction {
  type: "add",
  payload: Todo
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