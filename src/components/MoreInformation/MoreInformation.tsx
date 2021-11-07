import React from 'react';
import classes from './MoreInformation.module.css';
import AboutMe from './AboutMe'

const MoreInformation = () => {
    return (
        <div className={classes.item}>
            <AboutMe />
        </div>
    )
}
export default MoreInformation;