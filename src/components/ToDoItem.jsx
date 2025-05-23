
import React, { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="group p-4 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        ) : (
          <span
            className={`text-lg transition-all duration-300 ${
              todo.completed
                ? 'line-through text-gray-400 opacity-75'
                : 'text-gray-700'
            }`}
          >
            {todo.text}
          </span>
        )}
        <div className="flex space-x-2">
          <button
            onClick={() => toggleComplete(todo.id)}
            className={`p-2 rounded-lg ${
              todo.completed
                ? 'bg-gray-500 hover:bg-gray-600'
                : 'bg-green-500 hover:bg-green-600'
            } text-white transition duration-300`}
          >
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button
            onClick={handleEdit}
            className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition duration-300"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default ToDoItem;
