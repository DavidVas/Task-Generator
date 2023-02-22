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
                    display: "grid", gridTemplateColumns: "1fr 40px", gridGap: "20px",
                    border: "1px solid #4e72cc", borderRadius: "8px",
                }
            }>
                <div style={{verticalAlign: "middle", borderRadius: "8px", padding: "8px"}}>{name}</div>
                <div style={{margin: "auto"}}>{weight}</div>
            </div>
        </Tile>
    );
}