import Users from './Users';
import { UsersItemType, followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import { Dispatch } from 'redux';

type MapToStatePropsType = {
    usersPage: Array<UsersItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapToDispatchPropsType = {
    followed: (userId: string) => void
    unfollowed: (userId: string) => void
    setUsers: (users: Array<UsersItemType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type MyFriendsType = MapToDispatchPropsType & MapToStatePropsType;

let mapToStateProps = (state: AppStateType): MapToStatePropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount));
        }
    }
}
const UsersContainer = connect(mapToStateProps, mapToDispatchProps)(Users);
export default UsersContainer;
