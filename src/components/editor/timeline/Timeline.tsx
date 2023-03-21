import { FC, useState } from "react";
import { IdFile } from "@/redux/features/sidebar/sidebarSlice";

const Timeline: FC = () => {
    const [files, setFiles] = useState<IdFile>();

    return <div className="h-20 w-full rounded bg-zinc-900"></div>;
};

export default Timeline;
