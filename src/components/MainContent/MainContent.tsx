import MyPosts from './MyPosts/MyPosts'
import MainInfo from './MainInfo/MainInfo'
import { ProfilePageType, AllActionsType } from '../../redux/store'


export type MyPostsPropsType = {
  profilePage: ProfilePageType
  dispatch: (action: AllActionsType) => void
};

const MainContent: React.FC<MyPostsPropsType> = (props) => {
  return (
    <div>
      <MainInfo />
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  )
}

export default MainContent;