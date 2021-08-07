import { TodosAction, TodosState} from "../types"

const inputText = (state = { todos: [ { 
                                        text: "heres a todo",
                                        styles: {
                                          color: "white",
                                          fontSize: 30
                                        }
                                      }, { 
                                        text: "todoo 2",
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
        todos: [...state.todos, action.payload] 
      };
    default: return state;
  };
};

export default inputText;