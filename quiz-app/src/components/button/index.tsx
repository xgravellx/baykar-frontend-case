import React from 'react';

interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
    color?: string;
    width?: string;
}
const Button = ({onClick, text, color = 'bg-indigo-600', width = 'w-1/3' }: IButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${color} ${width} text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300`}
        >
            {text}
        </button>
    );
};

export default Button;
