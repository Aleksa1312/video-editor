import { FC, useEffect, useState } from "react";
import { IdFile, removeFile } from "@/redux/features/sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDraggingFile, setIsDragging } from "@/redux/features/dragging/draggingSlice";

export interface SideFileProps {
    item: IdFile;
}

const SideFile: FC<SideFileProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const isDragging = useAppSelector((state) => state.dragging.isDragging);
    const draggingFile = useAppSelector((state) => state.dragging.draggingFile);

    function onMouseDown() {
        dispatch(setDraggingFile(item));
        dispatch(setIsDragging(true));
    }

    function onMouseUp() {
        setTimeout(() => {
            dispatch(setDraggingFile(item));
            dispatch(setIsDragging(false));
        }, 50);
    }

    const x = useAppSelector((state) => state.mouse.x);
    const y = useAppSelector((state) => state.mouse.y);

    return (
        <div
            className="flex w-full flex-col gap-2 rounded bg-black/50 p-5 duration-200"
            style={
                isDragging && draggingFile == item
                    ? {
                          transition: "none",
                          position: "absolute",
                          top: `${y - 110}px`,
                          left: `${x - 110}px`,
                          scale: "0.5"
                      }
                    : {}
            }
        >
            <video
                src={item.url}
                className="w-full brightness-90 duration-200 hover:brightness-100"
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-center text-lg font-bold">{item.name}</p>
            <button className="rounded bg-red-500 px-5 py-2 text-white" onClick={() => dispatch(removeFile(item.id))}>
                Remove
            </button>
        </div>
    );
};

export default SideFile;
