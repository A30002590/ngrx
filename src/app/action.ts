import { createAction, props } from "@ngrx/store";

export const increment = createAction(
  "CreateAction",
  props<{ name: string }>()
);
export const decrement = createAction("Decrement");
export const reset = createAction("Reset");
