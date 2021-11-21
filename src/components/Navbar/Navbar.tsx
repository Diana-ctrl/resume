import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className= {classes.nav}>
            <div className= {classes.item}>
                <NavLink to='/mainPage' activeClassName= {classes.activeLink}>Main page</NavLink>
            </div>
            <div className= {classes.item}>
                <NavLink to= '/moreInformaition' activeClassName= {classes.activeLink}>More about me</NavLink>
            </div>
            <div className= {classes.item}>
                <NavLink to= '/message' activeClassName= {classes.activeLink}>Message</NavLink>
            </div>
            <div className= {classes.item}>
                <NavLink to='/music' activeClassName= {classes.activeLink}>Music for soul</NavLink>
            </div>
            <div className= {classes.item}>
                <NavLink to='/users' activeClassName= {classes.activeLink}>Friends</NavLink>
            </div>

        </nav>
    )
}
export default Navbar;