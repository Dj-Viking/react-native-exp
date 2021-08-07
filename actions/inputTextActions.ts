import { InputTextAction, InputTextState } from "../types"

export const inputTextChange = (
  data: InputTextState["inputText"]
): InputTextAction => {
  return {
    type: "change",
    payload: data
  }
}