import React from 'react';
import '../styles.css';
import {NavLink} from 'react-router-dom';

import Icon from '../images/icon.svg'


function Header() {
    return (
        <div className="header">
            <div className='header-leftBlock'> 
                <div>{Icon && <img src={Icon} className="header-Icon" alt="Icon" />}</div>
                <div><NavLink to='/'> Task list </NavLink> </div> 
            </div>
            <div>
                <nav>
                    <ul className='row margin-right-10' >
                        {/* <li className='margin-right-10'><NavLink to='/test'> Test </NavLink></li> */}
                        <li className='margin-right-10'><NavLink to='/profile'> Profile </NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;