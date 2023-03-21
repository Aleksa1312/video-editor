import { IdFile } from "@/redux/features/sidebar/sidebarSlice";
import { FC } from "react";
import SideFile from "./SideFile";

export interface UploadedFilesProps {
    files: IdFile[] | null;
    removeFile: (id: number) => void;
}

const UploadedFiles: FC<UploadedFilesProps> = (props) => {
    return (
        <div className="flex h-full w-full flex-col gap-4 overflow-y-scroll duration-200">
            {props.files &&
                props.files.map((item, id) => {
                    return <SideFile item={item} key={id} />;
                })}
        </div>
    );
};
export default UploadedFiles;
