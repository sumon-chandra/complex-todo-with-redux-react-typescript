import { combineReducers } from "redux";
import filterReducer from "./filter/filterReducer";
import todoReducer from "./todo/todoReducer";
import { RootState } from "../types";

const rootReducer = combineReducers<RootState>({
  todos: todoReducer,
  filter: filterReducer,
});
export default rootReducer;
