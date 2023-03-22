import { FC, useCallback, useEffect, useState } from "react";
import { IdFile } from "@/redux/features/sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDraggingFile, setIsDragging } from "@/redux/features/dragging/draggingSlice";
import TimelinePiece from "./piece/TimelinePiece";

export interface TimelineItem {
    item: IdFile;
    timelineId: number;
}

const Timeline: FC = () => {
    const dispatch = useAppDispatch();

    const [isHover, setIsHover] = useState<boolean>(false);

    const isDragging = useAppSelector((state) => state.dragging.isDragging);
    const draggingFile = useAppSelector((state) => state.dragging.draggingFile);

    const [timeline, setTimeline] = useState<TimelineItem[]>([]);

    function timelineRemove(id: number) {
        setTimeline(
            timeline.filter((item) => {
                if (item.timelineId !== id) return item;
            })
        );
    }

    const onMouseUp = useCallback(() => {
        if (isDragging && isHover && draggingFile) {
            const newTimelineItem: TimelineItem = {
                item: draggingFile,
                timelineId: Date.now()
            };
            setTimeline([...timeline, newTimelineItem]);
            dispatch(setIsDragging(false));
            dispatch(setDraggingFile(null));
        }
    }, [isDragging, isHover, draggingFile, timeline, dispatch]);

    useEffect(() => {
        window.addEventListener("mouseup", onMouseUp);

        return () => window.removeEventListener("mouseup", onMouseUp);
    }, [onMouseUp]);

    return (
        <div
            className="z-50 flex h-20 w-full flex-row overflow-scroll rounded bg-zinc-900 duration-200"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {timeline &&
                timeline.map((item, id) => {
                    return <TimelinePiece key={id} item={item} remove={timelineRemove} />;
                })}
        </div>
    );
};

export default Timeline;
