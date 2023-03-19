import { FC } from "react";
import { IdFile, removeFile } from "@/redux/features/sidebar/sidebarSlice";
import { useAppDispatch } from "@/redux/hooks";

export interface SideFileProps {
    item: IdFile;
}

const SideFile: FC<SideFileProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex w-full flex-col gap-2 rounded bg-black/50 p-5">
            <video
                src={URL.createObjectURL(item.file)}
                className="w-full brightness-90 duration-200 hover:brightness-100"
            />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-center text-lg font-bold">
                {item.file.name}
            </p>
            <button className="rounded bg-red-500 px-5 py-2 text-white" onClick={() => dispatch(removeFile(item.id))}>
                Remove
            </button>
        </div>
    );
};

export default SideFile;
