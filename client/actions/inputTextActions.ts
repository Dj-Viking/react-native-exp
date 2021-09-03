import { InputTextAction, InputTextState } from "../types";

export const inputTextChange = (
  data: InputTextState["inputText"],
): InputTextAction => ({
  type: "change",
  payload: data,
});
