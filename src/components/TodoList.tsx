import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete, onEdit }: Props) => {
    if (todos.length === 0)
        return <p className="text-center text-gray-500">No tasks yet!</p>;

    return (
        <ul className="space-y-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
};

export default TodoList;