/* eslint-disable react/prop-types */

import { TiDelete } from "react-icons/ti";


function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg shadow-md ${
        todo.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-3 accent-indigo-600"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700
        text-2xl" >
        <TiDelete />
      </button>
    </div>
  );
}

export default TodoItem;