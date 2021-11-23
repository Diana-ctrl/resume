import MyPostsContainer from './MyPosts/MyPostConteiner';
import MainInfo from './MainInfo/MainInfo';
import {MainContentType} from './MainInfo/MainInfo';


const MainContent = (props: MainContentType) => {
  return (
    <div>
      <MainInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default MainContent;

// export type MyPostsPropsType = {
//   store: StoreType
// }
// : React.FC<MyPostsPropsType>