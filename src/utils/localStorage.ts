import type { Todo } from "../types/todo";

const STORAGE_KEY = "todos";

export const saveTodos = (todos: Todo[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const loadTodos = (): Todo[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};