import { useState } from "react";
import Tile from "./Tile";

interface AddTaskProps {
    addTask: Function,
}

export default function AddTask({ addTask }: AddTaskProps) {
    const [ name, setName ] = useState<string>();

    return (
        <Tile>
            <div style={
                {
                    display: "grid", gridTemplateColumns: "1fr 20px", gridGap: "20px"
                }
            }>
                <input style={{borderRadius: "8px", background: "#4e72cc", padding: "8px"}} value={name} onChange={(event) => {
                    setName(event.target.value);
                }}></input>
                <button onClick={() => {
                    addTask(name);
                    setName('');    
                }}>Add</button>
            </div>
        </Tile>
    );
}
