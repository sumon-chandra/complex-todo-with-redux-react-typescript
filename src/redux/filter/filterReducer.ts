import { InitialFilterTypes } from "../../types";
import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";
import initialState from "./initialState";

type ActionTypes =
  | { type: typeof STATUS_CHANGED; payload: string }
  | {
      type: typeof COLOR_CHANGED;
      payload: { color: string; changeType: string };
    };

const filterReducer = (
  state = initialState,
  action: ActionTypes
): InitialFilterTypes => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLOR_CHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
export default filterReducer;
