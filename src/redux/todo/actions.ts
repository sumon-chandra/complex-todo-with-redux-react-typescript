import {
  ADDED,
  DELETED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  TOGGLED,
  SELECTED_COLOR,
} from "./actionTypes";

export const added = (todoText: string) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const deleted = (todoId: number) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const toggled = (todoId: number) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const completeAll = () => {
  return {
    type: ALL_COMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};

export const selectedColor = (color: string, todoId: number) => {
  return {
    type: SELECTED_COLOR,
    payload: {
      todoId,
      color,
    },
  };
};
