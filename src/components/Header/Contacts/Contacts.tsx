import classes from './Contacts.module.css';
const Contacts = () => {
    return (
        <div style={{ gridArea: 'c'}}>
            <div className={classes.a}>
                Phone number
        <a href="tel:=375(25)5413874" >  +375(25) 541-38-74 </a>
            </div>
            <div className={classes.a}>
                Mailing address 
            <a href="mailto:diana.lyah.96@mail.ru" >  diana.lyah.96@mail.ru </a>
            </div>
        </div >
    )
}
export default Contacts;

