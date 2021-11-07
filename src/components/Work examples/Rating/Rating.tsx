import classes from './Rating.module.css';
import { useState } from 'react';
type StarPropsType = {
    selected: boolean;
    onClick: () => void;
};
type RatingType = {
    value: number
    maxValue: number
};

function Star({ selected, onClick }: StarPropsType) {
    return <span onClick={onClick} style={{ cursor: 'pointer' }}>{selected ? '\u2605' : '\u2606'}</span>;
}

export default function Rating(props: RatingType) {
    const [rating, setRating] = useState(props.value);

    return (
        <div className={classes.ac}>
            You can change rating
            <div>
            {Array(props.maxValue).fill(null).map((_, i) => <Star selected={i < rating} onClick={() => setRating(i + 1)} />)}
            </div>
        </div>
    );
}