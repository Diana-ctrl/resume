type AllActionsType = FollowActionType | UnfollowActionType | SetUsersActionCreator | SetCurrentPageActionCreator | SetTotalUsersCountActionCreator | SetToggleIsFetchingActionCreator;

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export const FOLLOW = 'FOLLOW' as const;
export const UNFOLLOW = 'UNFOLLOW' as const;
export const SET_USERS = 'SET-USERS' as const;
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE' as const;
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT' as const;
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING' as const;

type FollowActionType = ReturnType<typeof followActionCreator>;
type UnfollowActionType = ReturnType<typeof unfollowActionCreator>;
type SetUsersActionCreator = ReturnType<typeof setUsersActionCreator>;
type SetCurrentPageActionCreator = ReturnType<typeof setCurrentPageActionCreator>;
type SetTotalUsersCountActionCreator = ReturnType<typeof setTotalUsersCountActionCreator>;
type SetToggleIsFetchingActionCreator = ReturnType<typeof setToggleIsFetchingActionCreator>;


export let followActionCreator = (userId: string) => ({ type: FOLLOW, userId } as const);
export let unfollowActionCreator = (userId: string) => ({ type: UNFOLLOW, userId } as const)
export let setUsersActionCreator = (users: Array<UsersItemType>) => ({ type: SET_USERS, users } as const);
export let setCurrentPageActionCreator = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const)
export let setTotalUsersCountActionCreator = (totalCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount } as const)
export let setToggleIsFetchingActionCreator = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const)

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
            return { ...state, users: action.users };
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}
export default UsersReduser;