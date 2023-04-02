import { FC } from "react";
import Screen from "./screen/Screen";
import Controls from "./controls/Controls";

const VideoPlayer: FC = () => {
    return (
        <div className="flex w-full flex-col items-center gap-5">
            <Screen />
            <Controls />
        </div>
    );
};

export default VideoPlayer;
