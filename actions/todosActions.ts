import { Todo, TodosAction } from "../types"
export const addTodo = (data: Todo): TodosAction => {
  return {
    type: "add",
    payload: data
  };
}