import { useEffect, useState } from "react";
import type { Todo } from "./types/todo";
import { loadTodos, saveTodos } from "./utils/localStorage";
import { Toaster, toast } from "react-hot-toast";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const handleAdd = (text: string) => {
    if (!text.trim()) {
      toast.error("Todo text can not be empty!");
      return;
    }

    const newTodo: Todo = {
      id: uuidv4(),
      text: text.trim(),
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    toast.success("Todo added!");
  };

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("Todo deleted");
  };

  const handleEdit = (id: string, newText: string) => {
    if (!newText.trim()) {
      toast.error("Todo text can not be empty!");
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );

    toast.success("Todo updated");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
        <Header title="Todo App" />
        <TodoInput onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;