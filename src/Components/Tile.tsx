interface TileProps {
    children: React.ReactNode | React.ReactNode[],
}

export default function Tile({ children }: TileProps) {
    return (
        <div style={
            {
                maxWidth: "240px", maxHeight: "120px"
            }
        }>
            {children}
        </div>
    );
}