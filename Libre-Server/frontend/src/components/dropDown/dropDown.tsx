import React, {FC, useState} from 'react';
import './dropDown.scss';


const [isExpanded, setisExpanded] = useState(false);



const DropDown: FC = () => {
    {
        const dropDowns = document.querySelectorAll('.dropDown');
        dropDowns.forEach(dropDown => {
            const select = dropDown.querySelector('.select')!;
            const caret = dropDown.querySelector('.caret')!;
            const menu = dropDown.querySelector('.menu')!;
            const options = dropDown.querySelectorAll('.menu li')!;
            const selected = dropDown.querySelector('.selected')!;

            select.addEventListener('click', () => {
                select.classList.toggle('select-clicked');
                caret.classList.toggle('caret-rotate');
                menu.classList.toggle('menu-open');
            });
            options.forEach(option => {
                option.addEventListener('click', () => {
                    selected.innerText = option.innerText;
                    select.classList.remove('select-clicked');
                    caret.classList.remove('caret-rotate');
                    menu.classList.remove('menu-open');
                    options.forEach(option => {
                        option.classList.remove('active');
                    });
                    option.classList.add('active');
                });
            });
        });
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
