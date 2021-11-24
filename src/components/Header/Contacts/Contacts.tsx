import classes from './Contacts.module.css';
import AddIcCallTwoToneIcon from '@material-ui/icons/AddIcCallTwoTone';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
const Contacts = () => {
    return (
        <div style={{  color: '#4B0082', float: 'left' }}>
            {/* gridArea: 'c', */}
            <div className={classes.a}>
                <AddIcCallTwoToneIcon />
                <a href="tel:=+375(25)5413874">Phone number: +375(25) 541-38-74 </a>
            </div>
            <div className={classes.a}>
                <DraftsTwoToneIcon />
                <a href="mailto:diana.lyah.96@mail.ru" > Email: diana.lyah.96@mail.ru </a>
            </div>
            {/* <div className={classes.a}>
                <a href="tg://resolve?domain=DianaLyah">Write in telegram</a>
            </div> */}
        </div >
    )
}
export default Contacts;

