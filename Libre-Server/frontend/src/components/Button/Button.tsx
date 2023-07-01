import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", 'btn--large'];

interface Props {
    onClick?: () => void;
    buttonStyle?: string
    buttonSize?: string;
    children?: string;
    className?: string;
  }

const Button: React.FC<Props> = ({ 
    onClick,
    buttonStyle, 
    buttonSize,
    children,
    className,

}) => {
        const checkButtonStyle = buttonStyle;
        const checkButtonSize = buttonSize;

        return(
            <Link to="/signIn" className="btn-mobile" >
                <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${className}`} 
                onClick = {onClick} type={"submit"}>
                    {children}
                </button>
                
            </Link>
        )
    };

export default Button;