import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../types";
import { colorChanged, statusChanged } from "../redux/filter/actions";

const numberOfTodos = (number_of_todos: number) => {
  switch (number_of_todos) {
    case 0:
      return "No task left";
    case 1:
      return "1 task left";
    default:
      return `${number_of_todos} tasks left`;
  }
};

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const filter = useSelector((state: RootState) => state.filter);
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  const handleStatusChange = (status: string) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color: string) => {
    if (filter.colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(remainingTodos)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChange("All")}
          className={`cursor-pointer ${filter.status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Incompleted")}
          className={`cursor-pointer ${
            filter.status === "Incompleted" && "font-bold"
          }`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Completed")}
          className={`cursor-pointer ${
            filter.status === "Completed" && "font-bold"
          }`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filter.colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filter.colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filter.colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
