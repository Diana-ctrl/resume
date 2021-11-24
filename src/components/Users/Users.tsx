import classes from './Users.module.css';
import { UsersItemType } from '../../redux/usersReducer';
import photoMan from '../../accets/images/man.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    usersPage: Array<UsersItemType>
    onPageChanged: (number: number) => void
    followed: (userId: string) => void
    unfollowed: (userId: string) => void
}
const Users = (props: UsersType) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = Array(10).fill(100).map((_, i) => i + 1);
    // for (let i = 1; i <= 10; i++) {
    //     pages.push(i);
    // }
    return (
        <div className={classes.item}>
            <div>
                {pages.map(number => <span onClick={() => { props.onPageChanged(number) }} className={props.currentPage === number ? classes.selectedPage : ''}> {number} </span>)}
            </div>
            {props.usersPage.map(user =>
                <div key={user.id}>
                    <div>
                        <NavLink to={'/mainPage/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : photoMan} alt='Man' />
                        </NavLink>
                    </div>
                    {user.name}
                    {user.followed ?
                        <button onClick={() => props.followed(user.id)}>UnFollow</button> :
                        <button onClick={() => props.unfollowed(user.id)}>Follow</button>}
                    <div>{user.status}</div>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </div>
            )}
        </div>
    )
}

export default Users;
