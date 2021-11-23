import { v1 } from 'uuid';
import { ProfileInfoAboitUserType } from '../components/MainContent/MainInfo/MainInfo';

type AllActionsType = AddPostActionType | OnPostChangeActionType | DeletePostActionCreatorType | SetUserProfileActionCreator ;
export type PostsType = {
    id: string
    message: string
    likecount: number
};

export type InitialProfilePageType = {
    postsData: Array<PostsType>
    newPostText: string
    profile: ProfileInfoAboitUserType
};

export const ADD_POST = 'ADD-POST' as const;
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' as const;
export const DELETE_POSTS = 'DELETE-POSTS' as const;
export const SET_USER_PROFILE = 'SET-USER-PROFILE' as const;

let initialState = {
    postsData: [
        { id: v1(), message: 'You see things and say ‘Why?’, but I dream things and say ‘Why not?’ George Bernard Shaw', likecount: 29 },
        { id: v1(), message: 'Success is going from failure to failure without losing your enthusiasm. Winston Churchill', likecount: 21 },
        { id: v1(), message: 'Genius is one percent inspiration, and ninety-nine percent perspiration. Thomas Edison', likecount: 25 },
    ],
    newPostText: '',
    profile: {} as ProfileInfoAboitUserType,
}

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type OnPostChangeActionType = ReturnType<typeof onPostChangeActionCreator>
type DeletePostActionCreatorType = ReturnType<typeof deletePostActionCreator>
type SetUserProfileActionCreator = ReturnType<typeof setUserProfileActionCreator>

export let addPostActionCreator = () => ({ type: ADD_POST });
export let onPostChangeActionCreator = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const)
export let deletePostActionCreator = () => ({ type: DELETE_POSTS });
export let setUserProfileActionCreator = (profile: ProfileInfoAboitUserType) => ({ type: SET_USER_PROFILE, profile } );


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
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default:
            return state;
    }
}
export default profileReduser;