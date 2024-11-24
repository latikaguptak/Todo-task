/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No to-dos yet! Add one above.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;