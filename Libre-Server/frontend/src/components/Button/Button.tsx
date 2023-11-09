import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

interface Props {
    onClick?: () => void;
    buttonStyle?: string
    buttonSize?: string;
    children?: string;
    className?: string;
    path?:string; 
}

const Button: React.FC<Props> = ({
    onClick,
    buttonStyle,
    buttonSize,
    children,
    className,
    path,

}) => {
    const checkButtonStyle = buttonStyle;
    const checkButtonSize = buttonSize;

    if (path) {
        return (
            <Link to={path} className="btn-mobile" >
                <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${className}`}
                    onClick={onClick} type={"submit"}>
                    {children}
                </button>
            </Link>
        )
    } else {
        return (
            <Link to="/register" className="btn-mobile" >
                <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${className}`}
                    onClick={onClick} type={"submit"}>
                    {children}
                </button>
            </Link>
        )
    }
};

export default Button;