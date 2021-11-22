import classes from './Users.module.css';
import { UsersItemType } from '../../redux/usersReducer';
import photoMan from '../../accets/images/man.png';

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
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={classes.item}>
            <div>
                {pages.map(number => <span onClick={() => { props.onPageChanged(number) }} className={props.currentPage === number ? classes.selectedPage : ''}> {number} </span>)}
            </div>
            {props.usersPage.map(user =>
                <div key={user.id}>
                    <div>
                        <img src={user.photos.small ? user.photos.small : photoMan} alt='Man' /></div>
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
