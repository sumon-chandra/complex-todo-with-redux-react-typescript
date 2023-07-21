import { useSelector } from "react-redux";
import Todo from "./Todo";
import { RootState, TodoTypes } from "../types";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const filter = useSelector((state: RootState) => state.filter);

  const filterByStatus = (todo: TodoTypes) => {
    switch (filter.status) {
      case "Completed":
        return todo.completed;
      case "Incompleted":
        return !todo.completed;
      default:
        return true;
    }
  };

  const filterByColors = (todo: TodoTypes) => {
    if (filter.colors.length > 0) {
      return filter.colors.includes(todo.color);
    }
    return true;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
