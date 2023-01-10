interface StackProps {
    children: React.ReactNode | React.ReactNode[],
    orientation?: Orientation,
    gridGap?: string,
}

type Orientation = "horizontal" | "vertical";

export default function Stack({children, orientation = "vertical", gridGap = "16px"}: StackProps) {
    const gridAutoFlow = orientation === "horizontal" ? "column" : "row";

    return (
        <div style={{display: "grid", gridGap: gridGap, gridAutoFlow: gridAutoFlow}}>
            {children}
        </div>
    );
}
