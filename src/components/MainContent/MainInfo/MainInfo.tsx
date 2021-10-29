import classes from './MainInfo.module.css'


const MainInfo = () => {
  return (
    <div>
      <img alt='Вставить картинку' src='https://shwanoff.ru/wp-content/uploads/2018/05/programming.jpg' />
      <div className={classes.item} >
        ava + description
    </div>
    </div>
  )
}

export default MainInfo;