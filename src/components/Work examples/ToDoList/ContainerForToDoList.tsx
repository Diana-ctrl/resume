import React, { ChangeEvent, KeyboardEvent } from 'react';
import classes from './ToDoList.module.css';
import { TaskType, FilterValuesType } from './ToDoList';
import { useState } from 'react';

type ContainerTodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const ContainerTodoList: React.FC<ContainerTodoListPropsType> = (props) => {
    const tasksJSXelements = props.tasks.map(t => {
        return (
            <li className={`${t.isDone === true ? 'is-done' : ''} ${classes.customcCheckbox}`} key={t.id}>
                <input

                    type="checkbox"
                    onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked)}
                    checked={t.isDone}
                    value={t.title}
                />
                <span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>X</button>
            </li>
        )
    })

    const [newTaskTitle, setNewTaskTitle] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const addTask = () => {
        const trimmedTitle = newTaskTitle.trim();
        if (trimmedTitle) {
            props.addTask(trimmedTitle);
            setNewTaskTitle('');
        } else {
            setError(true);
        }
        setNewTaskTitle('');
    }
    const onNewTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setNewTaskTitle(event.currentTarget.value)
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey || e.key === 'Enter') {
            addTask();
        }
    };
    const setAll = () => props.changeFilter('all');
    const setActive = () => props.changeFilter('active');
    const setCompleted = () => props.changeFilter('completed');
    const classForAll = props.filter === 'all' ? 'active-filter' : '';
    const classForActive = props.filter === 'active' ? 'active-filter' : '';
    const classForCompleted = props.filter === 'completed' ? 'active-filter' : '';
    const errorMessage = error ? <div style={{ backgroundColor: 'red', color: 'white', fontWeight: 900, textAlign: 'center' }}>Title is required</div> : '';
    return (
        <div className={classes.toDoList}>
            <div>
                <h3>{props.title}</h3>
            </div>
            <input
                className={error ? 'error' : ''}
                onChange={onNewTitleChangeHandler}
                value={newTaskTitle}
                onKeyPress={onKeyPressHandler}
                placeholder="Write something"
            />
            {errorMessage}
            <button onClick={addTask}>+</button>
            <ul>
                {tasksJSXelements}
            </ul>
            <div>
                <button
                    className={classForAll}
                    onClick={setAll}>All</button>
                <button
                    className={classForActive}
                    onClick={setActive}>Active</button>
                <button
                    className={classForCompleted}
                    onClick={setCompleted}>Completed</button>
            </div>
        </div>
    )
}
export default ContainerTodoList;