interface TileProps {
    children: React.ReactNode | React.ReactNode[],
}

export default function Tile({ children }: TileProps) {
    return (
        <div style={
            {
                borderRadius: "20px", background: "#4160AD", padding: "20px", maxWidth: "200px"
            }
        }>
            {children}
        </div>
    );
}