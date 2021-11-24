type AllActionsType = AuthUserDataActionType;

export type InitialUserAuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthUserDataActionType = ReturnType<typeof setUserDataActionCreator>

export const SET_USER_DATA = 'SET-USER-DATA' as const;

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
export const setUserDataActionCreator = (data: InitialUserAuthDataType) => ({ type: SET_USER_DATA, data })

const authReduser = (state: InitialUserAuthDataType = initialState, action: AllActionsType): InitialUserAuthDataType => { //как сюда попадает action???
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }
        default:
            return state;
    }
}
export default authReduser;