import { AllActionsType, UPDATE_NEW_MESSAGE_TEXT, ADD_MESSAGE } from './store';

export type DialogsItemType = {
    id: number
    name: string
    photo: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessagesType>
    newMessageText: string
}
let initialState = {
    dialogs: [
        { id: 1, name: 'IT-INCUBATOR', photo: 'https://yt3.ggpht.com/ytc/AKedOLTG4icr2chj7SuttAtEnnqP7KS20Xmc3CQcokQ0CQ=s900-c-k-c0x00ffffff-no-rj' },
        { id: 2, name: 'Employer', photo: 'https://new-variant.ru/wp-content/uploads/2019/06/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BE%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C.jpg' },
        { id: 3, name: 'English courses', photo: 'https://www.slivki.by/znijki-media/w522_322/default/1009921/kursy-obuchenie-minsk-skidka-englishbel-1.jpg' },
        { id: 4, name: 'Minsk Technical University', photo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Don_state_technical_university.JPG' }
    ],
    messages: [
        { id: 3, message: 'Hi' },
        { id: 3, message: 'How are you? How is the learning?' },
        { id: 3, message: 'Do our courses help you?' }
    ],
    newMessageText: '',
}

const dialogsReduser = (state: DialogsPageType = initialState, action: AllActionsType): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case ADD_MESSAGE:
            state.messages.push({ id: 3, message: state.newMessageText });
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}
export default dialogsReduser;