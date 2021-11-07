type NumberType = {
    number: number
    setNumber: (number: number) => void
    maxValue: number
    minValue: number
    classNameForNumber: string
}

const Number: React.FC<NumberType> = ({ number, setNumber, maxValue, minValue, classNameForNumber }) => {

    return (
        <div style={number !== maxValue ? { backgroundColor: '#E6E6FA' } : { backgroundColor: '#D8BFD8' }}>
            <div className={classNameForNumber}>{number}</div>
        </div>
    )
}
export default Number;