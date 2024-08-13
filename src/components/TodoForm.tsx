import { FormEvent, useState } from "react";

interface Props {
    onSubmit: (todo: string) => void;
}

function TodoForm(props: Props) {
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onSubmit(text);
    };
    return (
        <form>
            <input type="text" placeholder="enter todo..." value={text} onChange={e.target.value} />
            <button>Add</button>
        </form>
    );
}

export default TodoForm;