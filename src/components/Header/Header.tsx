import classes from './Header.module.css';
import Contacts from './Contacts/Contacts';
import React from 'react';
import { NavLink } from 'react-router-dom';
type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderPropsType) => { 
    return (
        <header className={`${classes.header} ${classes.item} ${classes.gridContainer}`}>

            <img style={{ gridArea: 'p' }} alt='Вставить картинку' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' />
            <a href="mailto:diana.lyah.96@mail.ru" className={classes.a}> Invitation to Interview </a>
            <Contacts />
            <div style={{ gridArea: 'l' , textAlign: 'right' }}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>} 
            </div>
        </header >
    )
}
export default Header;