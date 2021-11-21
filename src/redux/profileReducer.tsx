import {v1} from 'uuid';
type AllActionsType = AddPostActionType | OnPostChangeActionType | DeletePostActionCreatorType;
export type PostsType = {
    id: string
    message: string
    likecount: number
};

export type InitialProfilePageType = {
    postsData: Array<PostsType>
    newPostText: string
};

export const ADD_POST = 'ADD-POST' as const;
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' as const;
export const DELETE_POSTS = 'DELETE-POSTS' as const;

let initialState = {
    postsData: [
        { id: v1(), message: 'You see things and say ‘Why?’, but I dream things and say ‘Why not?’ George Bernard Shaw', likecount: 29 },
        { id: v1(), message: 'Success is going from failure to failure without losing your enthusiasm. Winston Churchill', likecount: 21 },
        { id: v1(), message: 'Genius is one percent inspiration, and ninety-nine percent perspiration. Thomas Edison', likecount: 25 },
    ],
    newPostText: '',
}

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type OnPostChangeActionType = ReturnType<typeof onPostChangeActionCreator>
type DeletePostActionCreatorType = ReturnType<typeof deletePostActionCreator>

export let addPostActionCreator = () => ({ type: ADD_POST });
export let onPostChangeActionCreator = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)
export let deletePostActionCreator = () => ({type: DELETE_POSTS});


const profileReduser = (state: InitialProfilePageType = initialState, action: AllActionsType): InitialProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            return { ...state, newPostText: '', postsData: [...state.postsData, { id: v1(), message: state.newPostText, likecount: 0 }] };
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText };
        }
        case DELETE_POSTS: {
            return { ...state, postsData: [] };
        }
        default:
            return state;
    }
}
export default profileReduser;