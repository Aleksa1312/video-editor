import { FC } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { togglePause } from "@/redux/features/VideoPlayer/VideoPlayerSlice";

import ControlsButton from "@/components/Buttons/ControlsButton";
import BackIcon from "@/components/Icons/BackIcon";
import ForwardIcon from "@/components/Icons/ForwardIcon";
import PauseIcon from "@/components/Icons/PauseIcon";
import PlayIcon from "@/components/Icons/PlayIcon";

const Controls: FC = () => {
    const isPaused = useAppSelector((state) => state.videoPlayer.isPaused);
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-row items-center gap-5">
            <ControlsButton className="flex h-[40px] w-[40px] items-center justify-center">
                <BackIcon size={30} className="text-white/80" />
            </ControlsButton>
            <ControlsButton onClick={() => dispatch(togglePause())}>
                {isPaused ? (
                    <PauseIcon size={40} className="text-white/80" />
                ) : (
                    <PlayIcon size={40} className="text-white/80" />
                )}
            </ControlsButton>
            <ControlsButton className="flex h-[40px] w-[40px] items-center justify-center">
                <ForwardIcon size={30} className="text-white/80" />
            </ControlsButton>
        </div>
    );
};

export default Controls;
