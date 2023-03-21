import { FC, useRef } from "react";
import { IdFile } from "@/redux/features/sidebar/sidebarSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import UploadedFiles from "./uploaded-files/UploadedFiles";
import { setFiles } from "@/redux/features/sidebar/sidebarSlice";

const SideBar: FC = () => {
    const dispatch = useAppDispatch();

    const files = useAppSelector((state) => state.sidebar.files);

    const fileInputRef = useRef<HTMLInputElement>(null);

    function handleChangeFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length) {
            var tempIdFiles = [];

            for (let i = 0; i < e.target.files.length; i++) {
                let file = e.target.files[i];

                let IdFile: IdFile = {
                    name: file.name,
                    id: Date.now(),
                    url: URL.createObjectURL(file)
                };

                tempIdFiles.push(IdFile);
            }

            // setFiles([...files, ...tempIdFiles]);
            dispatch(setFiles(tempIdFiles));
        }
    }

    function removeIdFile(id: number) {
        setFiles(
            files.filter((file) => {
                if (file.id !== id) {
                    return file;
                }
            })
        );
    }

    return (
        <div className="fixed flex h-full w-96 flex-col items-center justify-between bg-zinc-900 p-2 text-white/90">
            <UploadedFiles files={files} removeFile={removeIdFile} />

            <input
                type="file"
                accept="video/*"
                multiple
                onChange={(e) => handleChangeFile(e)}
                ref={fileInputRef}
                className="hidden"
            />
            <button onClick={() => fileInputRef.current?.click()} className="w-full rounded bg-blue-500 px-5 py-2">
                Add Files
            </button>
        </div>
    );
};

export default SideBar;
