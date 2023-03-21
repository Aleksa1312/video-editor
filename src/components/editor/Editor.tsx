import { FC } from "react";
import Timeline from "./timeline/Timeline";
import Player from "./player/Player";

const Editor: FC = () => {
    return (
        <div className="flex h-full min-h-screen w-full flex-col items-center justify-between bg-zinc-800 py-10 pl-[26.25rem] pr-10">
            <Player />
            <Timeline />
        </div>
    );
};

export default Editor;
