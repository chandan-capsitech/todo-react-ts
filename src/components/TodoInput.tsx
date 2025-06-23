import { useState } from "react";

interface Props {
    onAdd: (text: string) => void;
}

const TodoInput = ({ onAdd }: Props) => {
    const [text, setText] = useState("");

    const handleAdd = () => {
        onAdd(text.trim());
        setText("");
    };

    return (
        <div className="flex mb-6">
            <input
                type="text"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            />
            <button
                className="bg-blue-600 ml-2 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    );
};

export default TodoInput;
