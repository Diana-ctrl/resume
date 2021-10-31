import Dialogs from './Dialogs';
import { onMessageChangeActionCreator, addMessageActionCreator } from '../../redux/store'
import { InitialDialogsPageType } from '../../redux/dialogsReduser';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import { Dispatch } from 'redux';

type MapStatePropsType = {
    dialogsPage: InitialDialogsPageType
}

type MapDispatchToProps = {
    addMessage: () => void
    messageChange: (text: string) => void
}
export type DialogsType = MapStatePropsType & MapDispatchToProps;

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        messageChange: (text: string) => {
            dispatch(onMessageChangeActionCreator(text));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); // connect() - первым вызовом функции настрашиваем контейнерную компоненту
// она создает контейнерную компоненту, внутри контейнерной компоненты она рендарит призентационную компоненту и внутрь призентационной компоненты в качестве пропсов(атрибутов) передает свойства, которые  'сидят в объектах из первого вызова функции'
export default DialogsContainer;


//     // store => 3 methods => dispatch(), getState(), subscriber()
//     // getState() what return => state with two keys
//     // props.store = {
//     // getState: () => {
//     //  _state: {
// //        dialogsPage:
//  //       profilePage
