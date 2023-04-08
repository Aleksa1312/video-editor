import { FC, useCallback, useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import Needle from "./needle/Needle";
import {
    setLength,
    setNeedlePosition,
    setPreviewPosition,
} from "@/redux/features/Timeline/TimelineSlice";
import Preview from "./needle/Preview";

const Timeline: FC = () => {
    const dispatch = useAppDispatch();

    const timelineRef = useRef<HTMLDivElement>(null);

    const needleIsDrag = useAppSelector((state) => state.timeline.needleIsDrag);

    function handleMoveMouse(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (needleIsDrag) {
            dispatch(setNeedlePosition(e.nativeEvent.offsetX));
            dispatch(setPreviewPosition(e.nativeEvent.offsetX));
        } else {
            dispatch(setPreviewPosition(e.nativeEvent.offsetX));
        }
    }

    const previewPosition = useAppSelector(
        (state) => state.timeline.previewPosition
    );
    function handleTeleportNeedle() {
        dispatch(setNeedlePosition(previewPosition));
    }

    /* Set timeline max length upon rerender of timeline */
    const setTimelineLength = useCallback(() => {
        dispatch(setLength(timelineRef.current!.scrollWidth));
    }, [dispatch]);

    useEffect(() => {
        setTimelineLength();
    }, []);

    return (
        <div
            className="periodic-lines relative flex h-24 w-full flex-row rounded bg-zinc-900 shadow-lg shadow-black/30"
            onMouseMove={(e) => handleMoveMouse(e)}
            onClick={handleTeleportNeedle}
            ref={timelineRef}
        >
            <Needle />
            <Preview />
        </div>
    );
};

export default Timeline;
