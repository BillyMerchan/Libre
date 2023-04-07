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
    
    /*children?:string|string[], 
    type?:any, 
    onClick?:any, 
    buttonStyle:string, 
    buttonSize:string,
    className: JSX.Element| string
    children?:string, 
    type?:string, 
    onClick:boolean, 
    buttonStyle:string, 
    buttonSize: string*/
}) => {
        //const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0]
        const checkButtonStyle = buttonStyle;
        const checkButtonSize = buttonSize;
        //const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

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