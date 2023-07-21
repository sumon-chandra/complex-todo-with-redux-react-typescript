import { InitialTodoTypes } from "../../types";
import {
  ADDED,
  TOGGLED,
  SELECTED_COLOR,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  DELETED,
} from "./actionTypes";
import initialState from "./initialState";
type TodoActionTypes =
  | {
      type: typeof ADDED;
      payload: string;
    }
  | { type: typeof SELECTED_COLOR; payload: { color: string; todoId: number } }
  | { type: typeof TOGGLED; payload: number }
  | { type: typeof DELETED; payload: number }
  | { type: typeof ALL_COMPLETED }
  | { type: typeof CLEAR_COMPLETED };

function maxId(data: InitialTodoTypes[]) {
  const id = data.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
  return id + 1;
}

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): InitialTodoTypes[] => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        { id: maxId(state), text: action.payload, completed: false, color: "" },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case SELECTED_COLOR:
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          color: color,
        };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default todoReducer;
