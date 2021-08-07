import { AddTodoPayload, DeleteTodoPayload, TodosAction } from "../types"
export const addTodo = (args: AddTodoPayload): TodosAction => {
  const {
    todo
  } = args;
  return {
    type: "add",
    payload: { todo }
  };
}
export const deleteTodo = (args: DeleteTodoPayload): TodosAction => {
  const {
    todo,
  } = args;
  return {
    type: "delete",
    payload: { todo }
  };
}