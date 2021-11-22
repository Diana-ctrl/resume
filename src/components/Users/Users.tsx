import React from 'react';
import axios from 'axios';
import classes from './Users.module.css';
import photoMan from '../../accets/images/man.png';
import { UsersItemType } from '../../redux/usersReducer';


type UsersPropsType = {
    usersPage: Array<UsersItemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followed: (userId: string) => void
    unfollowed: (userId: string) => void
    setUsers: (users: Array<UsersItemType>) => void
    setCurrentPage: (number: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} & count = ${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (number: number) => {
        this.props.setCurrentPage(number);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count = ${this.props.pageSize}`).then(response => this.props.setUsers(response.data.items));
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div className={classes.item}>
            <div>
                {pages.map(number => <span onClick={() => { this.onPageChanged(number) }} className={this.props.currentPage === number ? classes.selectedPage : ''}> {number} </span>)}
            </div>
            {this.props.usersPage.map(user =>
                <div key={user.id}>
                    <div>
                        <img src={user.photos.small ? user.photos.small : photoMan} alt='Man' /></div>
                    {user.name}
                    {user.followed ?
                        <button onClick={() => this.props.followed(user.id)}>UnFollow</button> :
                        <button onClick={() => this.props.unfollowed(user.id)}>Follow</button>}
                    <div>{user.status}</div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </div>
            )}
        </div>
    }


}

export default Users;