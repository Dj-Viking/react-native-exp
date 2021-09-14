export interface Todo extends Object {
  text: string;
  id?: number;
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
