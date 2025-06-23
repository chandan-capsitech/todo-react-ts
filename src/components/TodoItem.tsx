import { useState } from "react";
import type { Todo } from "../types/todo";

interface Props {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    return (
        <li className="bg-white shadow-lg p-4 rounded flex justify-between items-center">
            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onEdit(todo.id, editText);
                            setIsEditing(false);
                        }
                    }}
                    className="flex-1 border px-2 py-1 mr-4"
                />
            ) : (
                <span
                    onClick={() => onToggle(todo.id)}
                    className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""
                        }`}
                >
                    {todo.text}
                </span>
            )}
            <div className="space-x-2">
                {isEditing ? (
                    <button
                        onClick={() => {
                            onEdit(todo.id, editText);
                            setIsEditing(false);
                        }}
                        className="text-green-600"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-blue-500"
                    >
                        Edit
                    </button>
                )}
                <button onClick={() => onDelete(todo.id)} className="text-red-500">
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;