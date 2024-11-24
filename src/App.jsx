import  { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white space-x-10 flex flex-col justify-center items-center">
    <h1 className="text-4xl font-extrabold text-blue-800 m-10 ">
        Latika ToDo App
      </h1>
      <div className="w-full max-w-md bg rounded-xl bg-white shadow-lg p-6 flex flex-col justify-center " >
        <h2 className="text-2xl  font-bold text-indigo-600 mb-4  flex items-center justify-center">
          Manage Your Tasks
        </h2>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;