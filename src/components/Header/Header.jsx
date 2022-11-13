import React from 'react';
import s from './Header.module.css';


const Header = (props) => {

    let showDesriptionImages = () => {
        alert('Бэээээээээтмееееееееен!!!!!>')
    }
    return (
        <div className={s.header}>
            <img onClick={ showDesriptionImages } className={s.imgLogo} src='http://orig06.deviantart.net/42b5/f/2011/290/7/a/batman_logo_by_machsabre-d4d6rrn.png' alt="" />
        </div>
    );
}

export default Header;