type AllActionsType = FollowActionType | UnfollowActionType | SetUsersActionCreator;

export type LocationType = {
    country: string
    city: string
}

type PhotoType = {
    small: string | null
    large: string | null
}

export type UsersItemType = {
    name: string
    id: string
    photos: PhotoType
    status: string | null
    followed: boolean
} 

export type InitialUsersPageType = {
    users: Array<UsersItemType>
}

export const FOLLOW = 'FOLLOW' as const;
export const UNFOLLOW = 'UNFOLLOW' as const;
export const SET_USERS = 'SET-USERS' as const;

type FollowActionType = ReturnType<typeof followActionCreator>;
type UnfollowActionType = ReturnType<typeof unfollowActionCreator>;
type SetUsersActionCreator = ReturnType<typeof setUsersActionCreator>;

export let followActionCreator = (userId: string) => ({ type: FOLLOW, userId } as const);
export let unfollowActionCreator = (userId: string) => ({ type: UNFOLLOW, userId } as const)
export let setUsersActionCreator = (users: Array<UsersItemType>) => ({ type: SET_USERS, users });

let initialState = {
    users: []
};

const UsersReduser = (state: InitialUsersPageType = initialState, action: AllActionsType): InitialUsersPageType => {
    switch (action.type) {
        case FOLLOW: {
            let newFollow = state.users.map(t => t.id === action.userId ? { ...t, followed: false } : t)
            return { ...state, users: newFollow };
        }
        case UNFOLLOW: {
            let newFollow = state.users.map(t => t.id === action.userId ? { ...t, followed: true } : t)
            return { ...state, users: newFollow };
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] };
        }
        default:
            return state;
    }
}
export default UsersReduser;