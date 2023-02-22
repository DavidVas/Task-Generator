import { useState } from "react";
import Tile from "./Tile";
import { AiOutlinePlus } from "react-icons/ai";

interface AddTaskProps {
    addTask: Function,
}

export default function AddTask({ addTask }: AddTaskProps) {
    const [ name, setName ] = useState<string>();

    return (
        <Tile>
            <div style={
                {
                    display: "grid", gridTemplateColumns: "1fr 40px", gridGap: "40px"
                }
            }>
                
                <input style={
                    {verticalAlign: "middle", borderRadius: "8px", border: "1px solid #4e72cc", fontSize: "16px", width: "100%", padding: "8px"}
                } value={name} onChange={(event) => {
                    setName(event.target.value);
                }}></input>
                <AiOutlinePlus className='button' style={
                    {borderRadius: "8px", border: "1px solid #4e72cc", width: "40px", height: "40px"}
                } onClick={() => {
                    if (name) {
                        addTask(name);
                        setName('');  
                    }
                }}>
                </AiOutlinePlus>
            </div>
        </Tile>
    );
}
