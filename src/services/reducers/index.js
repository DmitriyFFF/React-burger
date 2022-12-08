import { combineReducers } from "@reduxjs/toolkit"
import { constructorReducer } from "./constructor";
import { ingredientsReducer } from "./ingredients";
import { modalReducer } from "./modal";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  constructorReducer,
  ingredientsReducer,
  orderReducer,
  modalReducer
});
