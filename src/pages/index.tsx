import { FC, useEffect } from "react";

import SideBar from "@/components/sidebar/SideBar";
import Editor from "@/components/editor/Editor";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMouseX, setMouseY } from "@/redux/features/mouse/mouse.slice";

const Home: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        function onMouseMove(e: MouseEvent) {
            dispatch(setMouseX(e.clientX));
            dispatch(setMouseY(e.clientY));
        }

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [dispatch]);

    return (
        <div className="flex h-full w-full flex-row">
            <SideBar />
            <Editor />
        </div>
    );
};

export default Home;
