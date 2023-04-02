import { FC, useRef } from "react";

import { useAppSelector } from "@/redux/hooks";

import Needle from "./needle/Needle";

const Timeline: FC = () => {
    const percent = useAppSelector((state) => state.videoPlayer.percent);

    const timelineRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="periodic-lines h-24 w-full overflow-x-scroll rounded bg-zinc-900 shadow-lg shadow-black/30"
            ref={timelineRef}
        >
            <Needle timelineRef={timelineRef} />
        </div>
    );
};

export default Timeline;
