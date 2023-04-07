import React, {FC} from 'react';
import './dropDown.scss';

const DropDown: FC = () => {
    {
        const dropDowns = document.querySelectorAll('.dropDown');
        dropDowns.forEach(dropDown => {
            const select = dropDown.querySelector('.select');
            const caret = dropDown.querySelector('.caret');
            const menu = dropDown.querySelector('.menu');
            const options = dropDown.querySelector('.menu li');

            select.addEventListener('click', () => {
                select.classList.toggle('select-clicked');
                caret.classList.toggle('caret-rotate');
                menu.classList.toggle('menu-open');
            })
        }
        )
    }

    return(
        <div className = "dropDown">
            <div className = "select">
                <span className = "selected">Option 0</span>
                <div className = "caret"></div>
            </div>
            <ul className = "menu">
                <li className = "active">Option 1</li>
                <li>Option 2</li>
            </ul>
        </div>
        )
}


export default DropDown;
