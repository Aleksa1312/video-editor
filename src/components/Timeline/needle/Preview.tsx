import { useAppSelector } from "@/redux/hooks";
import { FC } from "react";

const Preview: FC = () => {
    const previewPosition = useAppSelector(
        (state) => state.timeline.previewPosition
    );

    const needleIsHover = useAppSelector(
        (state) => state.timeline.needleIsHover
    );

    return (
        <div
            className="pointer-events-none absolute h-24 w-[1px] bg-white/5"
            style={{
                left: `${previewPosition}px`,
                display: needleIsHover ? "none" : "block",
            }}
        ></div>
    );
};

export default Preview;
