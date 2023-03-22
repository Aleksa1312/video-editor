import { Dispatch, FC, SetStateAction, useState } from "react";
import { TimelineItem } from "../Timeline";

interface TimelinePieceProps {
    item: TimelineItem;
    remove: (id: number) => void;
}

const TimelinePiece: FC<TimelinePieceProps> = ({ item, remove }) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <>
            <div
                className="relative flex h-full w-52 flex-row items-start rounded bg-blue-500 text-white duration-200"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {item.timelineId}
                <button
                    className="absolute top-0 right-0 rounded bg-red-500 px-2"
                    onClick={() => remove(item.timelineId)}
                >
                    X
                </button>
            </div>
        </>
    );
};

export default TimelinePiece;
