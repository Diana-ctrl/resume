import React from 'react'
import Preloader from '../../common/preloader/Preloader'
import classes from './MainInfo.module.css'

type ContactsUserType = {
  instagram: string
  github: string
}

type PhotosUserType = {
  small: string
  large: string
}

export type ProfileInfoAboitUserType = {
  aboutMe: string
  contacts: ContactsUserType
  lookingForAJob: boolean
  fullName: string
  userId: number
  photos: PhotosUserType
}

export type MainContentType = {
  profile: ProfileInfoAboitUserType
}

const MainInfo = (props: MainContentType) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.container}>
      <img alt='Вставить картинку' src='https://nanosemantics.ai/wp-content/uploads/2019/12/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-1024x683.jpg' />
      {/* <div className={`${classes.item} ${classes.centered}`}>
        I like to learn, I like to write code and see the result of my work.
        <div>
          I am the frontend specialist that you are looking for!
        </div> */}
        <div>
          <img src={props.profile.photos?.large} alt='My face' />
          Information about me:
          I {props.profile.fullName} {props.profile.aboutMe}
          Contacts:
          github: {props.profile.contacts?.github}
          instagram: {props.profile.contacts?.instagram}
        </div>

      </div>
    )
}

export default MainInfo;