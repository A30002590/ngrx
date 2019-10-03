import { createReducer, on } from "@ngrx/store";

import * as action from "./action";

const initialstate = {
  name: "",
  address: "",
  phoneNumber: "",
  city: "",
  state: ""
};
const _couter = createReducer(
  initialstate,
  on(action.increment, (state, { name }) => ({ ...state, name: name }))
  // on(action.decrement, state => state - 1),
  //on(action.reset, state => (state = 0))
);
export function counterReducer(state, action) {
  return _couter(state, action);
}
