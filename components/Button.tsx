import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
    return ( 
        <button onClick={onClick} className={`bg-blue-600 hover:bg-blue-700 text-white uppercase text-sm font-semibold px-5 py-2 rounded-lg shadow transition duration-300 ease-in-out ${className}`}>
            {children}
        </button> 
    );
}

export default Button;
