import { combineReducers } from "@reduxjs/toolkit"
import { constructorReducer } from "./constructor";
import { ingredientsReducer } from "./ingredients";
import { modalReducer } from "./modal";
import { orderReducer } from "./order";
import { forgotPasswordReducer } from "./forgot-password";
import { resetPasswordReducer } from "./reset-password";
import { authReducer } from "./auth";
import { wsReducer } from "./wsReducer";
import { wsAuthReducer } from "./wsAuthReducer";

export const rootReducer = combineReducers({
  constructorReducer,
  ingredientsReducer,
  orderReducer,
  modalReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  authReducer,
  wsReducer,
  wsAuthReducer
});
