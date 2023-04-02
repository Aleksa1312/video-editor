import { FC } from "react";

interface ScreenProps {
    videoUrl?: string;
}

const Screen: FC<ScreenProps> = (props) => {
    return (
        <video
            src={props.videoUrl}
            className="h-[576] w-[1024px] bg-zinc-900 shadow-lg shadow-black/30"
        ></video>
    );
};

export default Screen;
