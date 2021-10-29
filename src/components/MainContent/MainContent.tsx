import MyPostsContainer from './MyPosts/MyPostConteiner';
import MainInfo from './MainInfo/MainInfo';
import { StoreType } from '../../redux/reduxStore';

export type MyPostsPropsType = {
  store: StoreType
}

const MainContent: React.FC<MyPostsPropsType> = (props) => {
  return (
    <div>
      <MainInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default MainContent;