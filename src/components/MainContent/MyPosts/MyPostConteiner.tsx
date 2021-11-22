import MyPosts from './MyPosts';
import { addPostActionCreator, onPostChangeActionCreator, deletePostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/reduxStore';
import { InitialProfilePageType } from '../../../redux/profileReducer'
import { Dispatch } from 'redux';

type MapStateToPropsType = {
    profilePage: InitialProfilePageType
}

type MapDispatchToPropsType = {
    postChange: (text: string) => void
    addPost: () => void
    deletePost: () => void

}
export type MyPostType = MapDispatchToPropsType & MapStateToPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        postChange: (text: string) => {
            dispatch(onPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        deletePost: () => {
            dispatch(deletePostActionCreator());
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;


// const MyPostsContainer: React.FC<MyPostsPropsContainerType> = (props) => {

//     let state = props.store.getState();
//     function addPost() {
//         props.store.dispatch(addPostActionCreator());
//     }
//     function postChange(text: string) {
//         props.store.dispatch(onPostChangeActionCreator(text));
//     }

//     return (
//         <MyPosts profilePage={state.profilePage} postChange={postChange} addPost={addPost} />
//     )
// }