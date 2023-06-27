import './dropDown.scss';
import React, { useState, useEffect, useRef} from 'react';

const DropDown = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handler = (event: Event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)){
                setOpen(false);
            }
        };

    document.addEventListener('click', handler);
    return () => {
        document.removeEventListener('click', handler);
    };
    }, []);

    const toggleDropdown = () => {
        open(!setOpen);
      };
    
    return(
        <div className = "dropDown">
            <div className = "select">
                <span className = "selected">Option 0</span>
                <div className = "caret"></div>
            </div>
            <ul className = "menu">
                <li className = "active">floor 1</li>
                <li>floorr 2</li>
            </ul>
        </div>
        );
    };


export default DropDown;

