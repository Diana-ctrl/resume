import classes from './Accordion.module.css'
import React from 'react';
import { useState } from 'react';

type PropsType2 = {
    title: string,
}
function AccordionTitle(props: PropsType2) {
    return (
        <h2>
            {props.title}
        </h2>
    )
}
function AccordionBody() {
    return (
        <ul style={{textAlign: 'center'}}>
            <h4>Three steps to success</h4>
            <li>1. Choose for yourself one area in which you want to develop and achieve excellent results.</li>
            <li>2. You must be surrounded by people who are engaged in this business.</li>
            <li>3. Daily practice. Daily hard work is the key to success. </li>
        </ul>
    );
}
type PropsType = {
    titleValue: string
}

export default function Accordion(props: PropsType) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className={classes.ac} style= {(collapsed ? {height: '300px'} : {height: '500px'})}>
            <AccordionTitle title={props.titleValue} />
            <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? 'Show' : 'Collapse'}</button>
            {!collapsed && <AccordionBody />}
        </div>
    );
}