import Tile from "./Tile";
import { FaTrashAlt } from "react-icons/fa";

export interface TaskData {
    name: string;
    weight: number;
}

export interface TaskProps {
    taskData: TaskData;
    isSelected: boolean;
    onTaskChange: Function;
    deleteMode: boolean;
    onDelete: Function;
}

export default function Task({ taskData, isSelected, onTaskChange, deleteMode, onDelete }: TaskProps) {
    return (
        <Tile>
            <div style={
                {
                    display: "grid", gridTemplateColumns: "1fr 36px", gridGap: "0px",
                    border: "1px solid #4e72cc", borderRadius: "8px", position: "relative", ...isSelected ? { backgroundColor: "#a3a3a3" } : {}
                }
            }>
                <div style={{ verticalAlign: "middle", borderRadius: "8px", padding: "8px" }}>{taskData.name}</div>
                <input type={"number"} value={taskData.weight} min={0} max={99} style={{ width: "30px", borderRadius: "8px", border: "1px solid #4e72cc" }} onChange={(event) => {
                    onTaskChange({...taskData, weight: Number(event.currentTarget.value)})
                }}/>
                {deleteMode && <FaTrashAlt style={{position: "absolute", right: "-25px", top: "10px", color: "red"}} onClick={() => onDelete()}/>}
            </div>
        </Tile>
    );
}
