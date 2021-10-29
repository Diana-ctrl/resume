import Dialogs from './Dialogs';
import { onMessageChangeActionCreator, addMessageActionCreator } from '../../redux/store'
import React from 'react';
import {StoreType} from '../../redux/reduxStore';

type DialogsPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    let state = props.store.getState();

    function addMessage() {
        props.store.dispatch(addMessageActionCreator());
    }

    // store => 3 methods => dispatch(), getState(), subscriber()
    // getState() what return => state with two keys

    function messageChange(text: string) {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    // props.store = {
    // getState: () => {
    //  _state: {
//        dialogsPage:
 //       profilePage
  //  }   
    //  }
    // }

    return (
        <Dialogs dialogsPage={state.dialogsPage} addMessage={addMessage} messageChange={messageChange} />
    )
}
export default DialogsContainer;