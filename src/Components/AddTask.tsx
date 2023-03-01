import React, { useState } from "react";
import Tile from "./Tile";
import { AiOutlinePlus } from "react-icons/ai";

interface AddTaskProps {
    addTask: Function,
}

export default function AddTask({ addTask }: AddTaskProps) {
    const [name, setName] = useState<string>();

    const onSubmit = (event: React.FormEvent) => {
        if (name) {
            addTask(name);
            setName('');
        }
        event.preventDefault();
    };

    return (
        <Tile>
            <form onSubmit={onSubmit}
                style={
                    {
                        display: "grid", gridTemplateColumns: "1fr 40px", gridGap: "40px"
                    }
                }>

                <input style={
                    { verticalAlign: "middle", borderRadius: "8px", border: "1px solid #4e72cc", fontSize: "16px", width: "100%", padding: "8px" }
                } value={name} onChange={(event) => {
                    setName(event.target.value);
                }}></input>
                <AiOutlinePlus className='button' style={
                    { borderRadius: "8px", border: "1px solid #4e72cc", width: "40px", height: "40px" }
                } onClick={onSubmit}>
                </AiOutlinePlus>
            </form>
        </Tile>
    );
}
