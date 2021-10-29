import classes from '../Dialogs.module.css';

type MessagesType = {
    message: string
}
const Messages: React.FC<MessagesType> = (props) => {
    return (
        <div>
        <div className={classes.massage}>{props.message}</div>
      </div>
    )
}

export default Messages;