import { FC, useCallback, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setNeedlePosition } from "@/redux/features/Timeline/TimelineSlice";

import PointerIcon from "@/components/Icons/PointerIcon";

interface NeedleProps {
    timelineRef: React.RefObject<HTMLDivElement>;
}

const Needle: FC<NeedleProps> = ({ timelineRef }) => {
    const needlePosition = useAppSelector(
        (state) => state.timeline.needlePosition
    );

    const dispatch = useAppDispatch();

    const [isDragging, setIsDragging] = useState<boolean>(false);

    function moveNeedle(e: MouseEvent) {
        dispatch(setNeedlePosition(e.clientX));
    }

    function onMouseDown() {
        setIsDragging(true);
        timelineRef.current?.addEventListener("mousemove", (e) =>
            moveNeedle(e)
        );
    }

    const removeTimelineEventListeners = useCallback(() => {
        timelineRef.current?.replaceWith(timelineRef.current.cloneNode(true));
    }, [timelineRef, moveNeedle]);

    // monitor mouse up
    useEffect(() => {
        function handleMouseUp() {
            setIsDragging(false);
            removeTimelineEventListeners();
        }

        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <div
            className="relative h-24 w-[2px] cursor-pointer bg-blue-500"
            style={{ left: `${needlePosition}px` }}
            onMouseDown={onMouseDown}
        >
            <PointerIcon
                size={20}
                className="relative top-[-0.9rem] left-[-0.55rem] text-blue-500"
            />
        </div>
    );
};

export default Needle;
