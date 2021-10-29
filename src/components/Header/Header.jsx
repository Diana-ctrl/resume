import classes from './Header.module.css';

const Header = () => {
    return (
        <header className= {`${classes.header} ${classes.item}`}>
            <img alt='Вставить картинку' />
            <button>Invite to work</button>
        </header>
    )
}
export default Header;