import MyPostsContainer from './MyPosts/MyPostConteiner';
import MainInfo from './MainInfo/MainInfo';

const MainContent = () => {
  return (
    <div>
      <MainInfo />
      <MyPostsContainer />
    </div>
  )
}

export default MainContent;

// export type MyPostsPropsType = {
//   store: StoreType
// }
// : React.FC<MyPostsPropsType>