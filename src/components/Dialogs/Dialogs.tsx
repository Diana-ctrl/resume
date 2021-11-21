import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Messages from './MessagesItem/MessagesItem';
import React, { KeyboardEvent } from 'react';
import { DialogsType } from './DialogsContainer';

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key = {d.id} id={d.id} name={d.name} photo={d.photo} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Messages key = {m.id} message={m.message} />);

    let newMessegeElement = React.createRef<HTMLTextAreaElement>();

    function onAddMessage() {
        props.addMessage();
    }

    function onMessageChange() {
        if (newMessegeElement.current) {
            props.messageChange(newMessegeElement.current.value);
        }
    }

    function onPressEnter(e: KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === 'Enter') {
            props.addMessage();
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessegeElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText} onKeyPress={onPressEnter}></textarea>
                <button onClick={onAddMessage}>Add message</button>
            </div>


        </div>
    )
}
export default Dialogs;