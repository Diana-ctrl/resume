import classes from './WorkExamples.module.css';
import ToDoList from './ToDoList/ToDoList';
import Counter from './Counter/Counter';
import Rating from './Rating/Rating';
import Accordion from './Accordion/Accordion';
import OnOff from './OnOff/OnOff';


const WorkExamples = () => {

    return (
        <div className={classes.works}>
            <ToDoList />
            <Counter />
            <OnOff />
            <Accordion titleValue="If you want to see something interesting, then click on me" />
            <Rating value={3} maxValue={5} />
        </div>
    )
}
export default WorkExamples;