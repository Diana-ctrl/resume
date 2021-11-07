import s from './counter.module.css'
type CounterType = {
    incButton: () => void
    resetButton: () => void
    disabledForReset: boolean
    disabledForInc: boolean
}

const Buttons: React.FC<CounterType> = ({ incButton, resetButton, disabledForInc, disabledForReset }) => {

    return (
        <span >
            <button className={s.button} onClick={incButton} disabled={disabledForInc}>inc</button>
            <button className={s.button} onClick={resetButton} disabled={disabledForReset}>reset</button>
        </span>
    )
}
export default Buttons;