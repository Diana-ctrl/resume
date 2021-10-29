import { AllActionsType, ADD_POST, UPDATE_NEW_POST_TEXT } from './store';

export type PostsType = {
    id: number
    message: string
    likecount: number
};

export type ProfilePageType = {
    postsData: Array<PostsType>
    newPostText: string
};

let initialState = {
    postsData: [
        { id: 1, message: 'You see things and say ‘Why?’, but I dream things and say ‘Why not?’ George Bernard Shaw', likecount: 29 },
        { id: 1, message: 'Success is going from failure to failure without losing your enthusiasm. Winston Churchill', likecount: 21 },
        { id: 1, message: 'Genius is one percent inspiration, and ninety-nine percent perspiration. Thomas Edison', likecount: 25 },
    ],
    newPostText: '',
}

const profileReduser = (state: ProfilePageType = initialState, action: AllActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            state.postsData.push({ id: 1, message: state.newPostText, likecount: 0 });
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export default profileReduser;