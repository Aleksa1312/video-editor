import React, { FC, useCallback, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
    setNeedleIsDrag,
    setNeedleIsHover,
    setNeedlePosition,
} from "@/redux/features/Timeline/TimelineSlice";

import PointerIcon from "@/components/Icons/PointerIcon";

const Needle: FC = () => {
    const dispatch = useAppDispatch();

    const needlePosition = useAppSelector(
        (state) => state.timeline.needlePosition
    );
    const isDragging = useAppSelector((state) => state.timeline.needleIsDrag);

    useEffect(() => {
        function handleMouseUp() {
            dispatch(setNeedleIsDrag(false));
        }

        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dispatch]);

    return (
        <div
            className="relative h-24 w-[5px] cursor-pointer bg-blue-500"
            style={{
                left: `${needlePosition}px`,
                pointerEvents: isDragging ? "none" : "all",
            }}
            onMouseDown={() => dispatch(setNeedleIsDrag(true))}
            onMouseOver={() => dispatch(setNeedleIsHover(true))}
            onMouseLeave={() => dispatch(setNeedleIsHover(false))}
        >
            <PointerIcon
                size={30}
                className="relative top-[-0.5rem] left-[-0.75rem] text-blue-700"
            />
        </div>
    );
};

export default Needle;
