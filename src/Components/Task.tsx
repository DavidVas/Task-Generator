import Stack from "./Stack";

interface Task {
    name: string;
    weight: number;
}

export default function Task({name, weight}: Task) {
    return (
        <body>
            <div style={
                {
                    borderRadius: "20px", background: "#4160AD", padding: "20px",
                    display: "grid", gridTemplateColumns: "1fr 20px", gridGap: "20px", maxWidth: "200px"
                }
            }>
                <div style={{verticalAlign: "middle", borderRadius: "8px", background: "#5F7CC6", padding: "8px"}}>{name}</div>
                <div style={{margin: "auto"}}>{weight}</div>
            </div>
            </body>
    );
}