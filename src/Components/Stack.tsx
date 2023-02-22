interface StackProps {
    children: React.ReactNode | React.ReactNode[],
    orientation?: Orientation,
    gridGap?: string,
    scrollable?: Boolean,
}

type Orientation = "horizontal" | "vertical";

export default function Stack({children, orientation = "vertical", gridGap = "20px"}: StackProps) {
    const gridAutoFlow = orientation === "horizontal" ? "column" : "row";

    return (
        <div style={{ display: "grid", gridGap: gridGap, gridAutoFlow: gridAutoFlow
        }}>
            {children}
        </div>
    );
}
