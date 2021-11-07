import classes from './Header.module.css';
import Contacts from './Contacts/Contacts';

const Header = () => {
    return (
        <header className= {`${classes.header} ${classes.item} ${classes.gridContainer}`}>
            <img style ={{gridArea: 'p'}} alt='Вставить картинку' src ='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'/>
            <a href="mailto:diana.lyah.96@mail.ru" className= {classes.a}> Invitation to Interview </a>
            <Contacts />
        </header>
    )
}
export default Header;