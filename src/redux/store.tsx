// @ts-nocheck
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
export const ADD_MESSAGE = 'ADD-MESSAGE';
export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const DELETE_POSTS = 'DELETE-POSTS';

export type PostsType = {
    id: number
    message: string
    likecount: number
};
export type DialogsItemType = {
    id: number
    name: string
    photo: string
};
export type MessagesType = {
    message: string
};
export type ProfilePageType = {
    postsData: Array<PostsType>
    newPostText: string
};
export type DialogsPageType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessagesType>
    newMessageText: string
};
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
};

// type AddPostType = {
//     type: ADD_POST
// };                       //создание типов вручную
// type UpdatePostType = {
//     type: UPDATE_NEW_POST_TEXT
//     newText: string
// };
// type UpdateMessageType = {
//     type: UPDATE_NEW_MESSAGE_TEXT
//     newText: string
// };
// type AddMessageType = {
//     type: ADD_MESSAGE
// };
// export type AllActionsType = AddPostType | UpdatePostType | UpdateMessageType | AddMessageType

export type AllActionsType = AddPostActionType | OnPostChangeActionType | AddMessageActionType | OnMessageChangeActionType

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (RootStateType) => void) => void
    dispatch: (action: AllActionsType) => void
};
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type OnPostChangeActionType = ReturnType<typeof onPostChangeActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type OnMessageChangeActionType = ReturnType<typeof onMessageChangeActionCreator>
type DeletePostActionCreatorType = ReturnType<typeof deletePostActionCreator>

let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'You see things and say ‘Why?’, but I dream things and say ‘Why not?’ George Bernard Shaw', likecount: 29 },
                { id: 1, message: 'Success is going from failure to failure without losing your enthusiasm. Winston Churchill', likecount: 21 },
                { id: 1, message: 'Genius is one percent inspiration, and ninety-nine percent perspiration. Thomas Edison', likecount: 25 },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber(state: RootStateType) {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель observer  
    },

    dispatch(action: AllActionsType) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};
export let addPostActionCreator = (): AddPostActionType => ({ type: ADD_POST });
export let onPostChangeActionCreator = (text: string): OnPostChangeActionType => ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)
export let addMessageActionCreator = (): AddMessageActionType => ({ type: ADD_MESSAGE });
export let onMessageChangeActionCreator = (text: string): OnMessageChangeActionType => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text } as const)
export let deletePostActionCreator = (): DeletePostActionCreatorType => ({type: DELETE_POSTS});
export default store;