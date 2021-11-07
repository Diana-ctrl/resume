import React from 'react';
import { useState } from 'react';
import Number from './Number';
import Buttons from './Buttons'
import s from './counter.module.css';

const Counter = () => {
    let [number, setNumber] = useState<number>(0);

    let maxValue = 5;
    let minValue = 0;

    let incButton = () => {
        if (number < maxValue) {
            setNumber(number + 1);
        }
    }
    let resetButton = () => setNumber(0);

    let classNameForNumber = (number !== maxValue ? `${s.number}` : `${s.number} ${s.forfive}`);

    let disabledForInc = (number === maxValue);
    let disabledForReset = (number === minValue);
    return (
        <div className={s.ac}>
            <Number number={number} setNumber={setNumber} maxValue={maxValue} minValue={minValue} classNameForNumber={classNameForNumber} />
            <Buttons incButton={incButton} resetButton={resetButton} disabledForInc={disabledForInc} disabledForReset={disabledForReset} />
        </div>
    )
}
export default Counter;