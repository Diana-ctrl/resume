import {v1} from 'uuid';
type AllActionsType = AddMessageActionType | OnMessageChangeActionType;

export type DialogsItemType = {
    id: string
    name: string
    photo: string
}
export type MessagesType = {
    id: string
    message: string
}
export type InitialDialogsPageType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessagesType>
    newMessageText: string
}

type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type OnMessageChangeActionType = ReturnType<typeof onMessageChangeActionCreator>

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT' as const;
export const ADD_MESSAGE = 'ADD-MESSAGE' as const;


export let addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export let onMessageChangeActionCreator = (text: string) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text } as const)



let initialState = {
    dialogs: [
        { id: v1(), name: 'IT-INCUBATOR', photo: 'https://yt3.ggpht.com/ytc/AKedOLTG4icr2chj7SuttAtEnnqP7KS20Xmc3CQcokQ0CQ=s900-c-k-c0x00ffffff-no-rj' },
        { id: v1(), name: 'Employer', photo: 'https://new-variant.ru/wp-content/uploads/2019/06/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BE%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C.jpg' },
        { id: v1(), name: 'English courses', photo: 'https://www.slivki.by/znijki-media/w522_322/default/1009921/kursy-obuchenie-minsk-skidka-englishbel-1.jpg' },
        { id: v1(), name: 'Minsk Technical University', photo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Don_state_technical_university.JPG' }
    ],
    messages: [
        { id: v1(), message: 'Hi' },
        { id: v1(), message: 'How are you? How is the learning?' },
        { id: v1(), message: 'Do our courses help you?' }
    ],
    newMessageText: '',
}

const dialogsReduser = (state: InitialDialogsPageType = initialState, action: AllActionsType): InitialDialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.newText };
        }
        case ADD_MESSAGE: {
            return {...state, 
                newMessageText: '', 
                messages: [...state.messages, { id: v1(), message: state.newMessageText } ]
            };
        }

        default:
            return state;
    }
}
export default dialogsReduser;