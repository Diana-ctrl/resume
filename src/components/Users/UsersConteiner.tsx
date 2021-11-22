import React from 'react';
import { UsersItemType, followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setToggleIsFetchingActionCreator } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';


type MapStateToPropsType = {
    usersPage: Array<UsersItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    followed: (userId: string) => void
    unfollowed: (userId: string) => void
    setUsers: (users: Array<UsersItemType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetchig: (isFetching: boolean) => void
}

export type MyFriendsType = MapDispatchToPropsType & MapStateToPropsType;


type UsersPropsType = {
    usersPage: Array<UsersItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followed: (userId: string) => void
    unfollowed: (userId: string) => void
    setUsers: (users: Array<UsersItemType>) => void
    setCurrentPage: (number: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetchig: (isFetching: boolean) => void
}
class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setToggleIsFetchig(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetchig(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (number: number) => {
        this.props.setCurrentPage(number);
        this.props.setToggleIsFetchig(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetchig(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <>{this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                currentPage={this.props.currentPage} usersPage={this.props.usersPage}
                followed={this.props.followed} unfollowed={this.props.unfollowed} onPageChanged={this.onPageChanged} />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         followed: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unfollowed: (userId) => {
//             dispatch(unfollowActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageActionCreator(currentPage));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount));
//         },
//         setToggleIsFetchig: (isFetching) => {
//             dispatch(setToggleIsFetchingActionCreator(isFetching));
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {followed: followActionCreator,
unfollowed: unfollowActionCreator,
setUsers: setUsersActionCreator,
setCurrentPage: setCurrentPageActionCreator,
setTotalUsersCount: setTotalUsersCountActionCreator,
setToggleIsFetchig: setToggleIsFetchingActionCreator})(UsersAPIComponent);
export default UsersContainer;
