import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";

export const colorChanged = (color: string, changeType: string) => {
  return {
    type: COLOR_CHANGED,
    payload: {
      color,
      changeType,
    },
  };
};

export const statusChanged = (status: string) => {
  return {
    type: STATUS_CHANGED,
    payload: status,
  };
};
