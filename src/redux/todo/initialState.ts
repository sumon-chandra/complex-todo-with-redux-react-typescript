import { InitialTodoTypes } from "../../types";

const initialState: InitialTodoTypes[] = [
  {
    id: 1,
    text: "Learn ReactJS",
    completed: true,
    color: "",
  },
  {
    id: 2,
    text: "Learn ReduxJS",
    completed: false,
    color: "red",
  },
];

export default initialState;
