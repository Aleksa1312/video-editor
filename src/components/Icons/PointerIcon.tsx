import React, { FC } from "react";

interface IconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    size: number;
}

const PointerIcon: FC<IconProps> = (props) => {
    return (
        <svg
            className={props.className}
            width={props.size}
            height={props.size}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
    );
};

export default PointerIcon;
