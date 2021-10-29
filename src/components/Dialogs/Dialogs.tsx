import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Messages from './MessagesItem/MessagesItem';
import { DialogsPageType, AllActionsType, onMessageChangeActionCreator, addMessageActionCreator } from '../../redux/store'
import React, { KeyboardEvent } from 'react';

type DialogsPropsType = {
    dialogs: DialogsPageType
    dispatch: (action: AllActionsType) => void
};


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem id={d.id} name={d.name} photo={d.photo} />);
    let messagesElements = props.dialogs.messages.map(m => <Messages message={m.message} />);

    let newMessegeElement = React.createRef<HTMLTextAreaElement>();

    function addMessage() {
        props.dispatch(addMessageActionCreator());
    }

    function onMessageChange() {
        if (newMessegeElement.current) {
            props.dispatch(onMessageChangeActionCreator(newMessegeElement.current.value));
        }
    }
    function pressEnter(e: KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === 'Enter') {
            props.dispatch(addMessageActionCreator());
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessegeElement} onChange={onMessageChange} value={props.dialogs.newMessageText} onKeyPress={pressEnter}></textarea>
                <button onClick={addMessage} >Add message</button>
            </div>


        </div>
    )
}
export default Dialogs;