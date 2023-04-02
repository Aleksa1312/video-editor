import { FC } from "react";

interface ControlsButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    disabled?: boolean;
}

const ControlsButton: FC<ControlsButtonProps> = (props) => {
    return (
        <button
            className={`${props.className} rounded bg-black/50 shadow-lg shadow-black/30 hover:opacity-80`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default ControlsButton;
