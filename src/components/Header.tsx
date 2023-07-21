import noteImg from "../assets/notes.png";
import tickImg from "../assets/double-tick.png";
import plusImg from "../assets/plus.png";
import { useDispatch } from "react-redux";
import { added, clearCompleted, completeAll } from "../redux/todo/actions";
const Header = () => {
  const dispatch = useDispatch();
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & { todo: { value: string } };
    const text = target.todo.value;
    dispatch(added(text));
  };

  const handleCompleteAll = () => {
    dispatch(completeAll());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        onSubmit={handleAddTodo}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          name="todo"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          style={{ backgroundImage: `url('${plusImg}')` }}
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleCompleteAll}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={tickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearCompleted} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
