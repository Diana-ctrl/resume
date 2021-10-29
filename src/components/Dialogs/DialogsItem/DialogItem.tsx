import { NavLink } from 'react-router-dom';
import { DialogsItemType } from '../../../redux/store';
import classes from '../Dialogs.module.css';

const DialogItem: React.FC<DialogsItemType> = (props) => {
    return (
        <div className={classes.dialogs + ' ' + classes.active + ' ' + classes.item}>
            <img src={props.photo} alt='Can not add' />
            <NavLink to={'/dialogs/' + props.id} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;