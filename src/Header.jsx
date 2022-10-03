import React from 'react';
import icon from './icons/bag-check.svg'

const Header = () => {
    return (
        <div className='header'>
           <div className='logo'>Intocode Coding Shopcamp</div>
           <div className='icon'>
           <img src={icon} alt="" />
           </div>
        </div>
    );
};

export default Header;