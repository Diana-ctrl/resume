import React from 'react';
import axios from 'axios';
import classes from './Users.module.css';
import photoMan from '../../accets/images/man.png';
import { UsersItemType } from '../../redux/usersReducer';


type UsersPropsType = {
    usersPage: Array<UsersItemType>
    followed: (userId: string) => void
    unfollowed: (userId: string) => void
    setUsers: (users: Array<UsersItemType>) => void

}

class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props)
        if (this.props.usersPage.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data.items));
        }
    }
    render() {
        return <div className={classes.item}>
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