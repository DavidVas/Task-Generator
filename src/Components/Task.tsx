import Tile from "./Tile";

export interface TaskModel {
    name: string;
    weight: number;
}

export default function Task({name, weight}: TaskModel) {
    return (
        <Tile>
            <div style={
                {
                    display: "grid", gridTemplateColumns: "1fr 20px", gridGap: "20px"
                }
            }>
                <div style={{verticalAlign: "middle", borderRadius: "8px", background: "#4e72cc", padding: "8px"}}>{name}</div>
                <div style={{margin: "auto"}}>{weight}</div>
            </div>
        </Tile>
    );
}