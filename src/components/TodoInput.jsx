/* eslint-disable react/prop-types */
import  { useState } from "react";
import { MdAdd } from "react-icons/md";

function TodoInput({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    
    if(todo.trim()){
      addTodo(todo);
      setTodo("");
    }
  };
  const handlekeypress= (e) => {
    if (e.key === "Enter") {
      addTodo(todo);
      setTodo("");
    }
  }

  return (
    <div className="flex gap-3 mb-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handlekeypress}
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
        placeholder="Add a new to-do"
      />
      <button
        onClick={handleAdd}
        
        className="bg-blue-600 text-white px-3 py-3 rounded-full shadow hover:bg-indigo-700
       text-xl">
        <MdAdd />
      </button>
    </div>
  );
}

export default TodoInput;