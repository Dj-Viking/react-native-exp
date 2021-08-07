import { TodosAction, TodosState, Todo} from "../types"

const todos = (state = { todos: [ { 
                                    text: "heres a todo",
                                    id: 0,
                                    styles: {
                                      color: "white",
                                      fontSize: 30
                                    }
                                  }, { 
                                    text: "todoo 2",
                                    id: 1,
                                    styles: {
                                      color: "white", 
                                      fontSize: 30
                                    }
                                  }
                                ] } as TodosState,
                   action: TodosAction
): TodosState => {
  switch(action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, action.payload.todo as Todo] 
      };
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload.todo?.id) as Todo[]
      };
    default: return state;
  };
};

export default todos;