import { FC } from "react";

import Timeline from "@/components/Timeline/Timeline";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

const HomePage: FC = () => {
    return (
        <div className="page flex flex-col justify-between py-10">
            <VideoPlayer />
            <Timeline />
        </div>
    );
};

export default HomePage;
