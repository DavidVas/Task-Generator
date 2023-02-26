import Stack from "./Stack";
import Tile from "./Tile";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export interface TaskData {
    name: string;
    weight: number;
}

export interface TaskProps {
    taskData: TaskData;
    isSelected: boolean;
    onTaskChange: Function;
}

    export default function Task({taskData, isSelected, onTaskChange}: TaskProps) {
    return (
        <Tile>
            <div style={
                {
                    display: "grid", gridTemplateColumns: "1fr 40px", gridGap: "20px",
                    border: "1px solid #4e72cc", borderRadius: "8px", ...isSelected ? { backgroundColor: "#a3a3a3"} : {}
                }
            }>
                <div style={{verticalAlign: "middle", borderRadius: "8px", padding: "8px"}}>{taskData.name}</div>
                    <input type={"number"} value={taskData.weight} style={{ maxWidth: "40px"}} onChange={(event) => {
                        const newTask: TaskData = {name: taskData.name, weight: Number(event.currentTarget.value)}
                        onTaskChange(newTask)
                        }}></input>
                    {/* <IoIosArrowUp style={{backgroundColor: "#b3b3b3"}}/>
                    <div style={{textAlign: "center"}}>{weight}</div>
                    <IoIosArrowDown style={{backgroundColor: "#b3b3b3"}}/> */}
            </div>
        </Tile>
    );
}