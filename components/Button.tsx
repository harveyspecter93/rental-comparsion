import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    hasErrors?: boolean;
}

const Button = ({ children, onClick, className, hasErrors }: ButtonProps) => {
    return ( 
        <button onClick={onClick} disabled={hasErrors} className={`bg-blue-600 hover:bg-blue-700 text-white uppercase text-sm font-semibold px-5 py-2 rounded-lg shadow transition duration-300 ease-in-out ${className} ${ !!hasErrors ? 'cursor-not-allowed opacity-50' : '' }`}>
            {children}
        </button> 
    );
}

export default Button;
