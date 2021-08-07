import { InputTextAction, InputTextState} from "../types"

const inputText = (state = { inputText: "blah" } as InputTextState,
                   action: InputTextAction
): InputTextState => {
  switch(action.type) {
    case "change":
      return {
        ...state,
        inputText: action.payload
      };
    default: return state;
  };
};

export default inputText;