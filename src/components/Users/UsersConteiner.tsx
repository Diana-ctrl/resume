import UsersC from './Users';
import { UsersItemType, followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import { Dispatch } from 'redux';

type MapToStatePropsType = {
    usersPage: Array<UsersItemType>
}

type MapToDispatchPropsType = {
    followed: (userId: string) => void
    unfollowed: (userId: string) => void
    setUsers: (users: Array<UsersItemType>) => void

}
export type MyFriendsType = MapToDispatchPropsType & MapToStatePropsType;

let mapToStateProps = (state: AppStateType): MapToStatePropsType => {
    return {
        usersPage: state.usersPage.users,
    }
}
let mapToDispatchProps = (dispatch: Dispatch): MapToDispatchPropsType => {
    return {
        followed: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollowed: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
    }
}
const UsersContainer = connect(mapToStateProps, mapToDispatchProps)(UsersC);
export default UsersContainer;
