import MyPosts from './MyPosts';
import { addPostActionCreator, onPostChangeActionCreator, deletePostActionCreator } from '../../../redux/store';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/reduxStore';
import { InitialProfilePageType } from '../../../redux/profileReduser'
import { Dispatch } from 'redux';

type MapToStatePropsType = {
    profilePage: InitialProfilePageType
}

type MapToDispatchPropsType = {
    postChange: (text: string) => void
    addPost: () => void
    deletePost: () => void

}
export type MyPostType = MapToDispatchPropsType & MapToStatePropsType;

let mapToStateProps = (state: AppStateType): MapToStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapToDispatchProps = (dispatch: Dispatch): MapToDispatchPropsType => {
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
const MyPostsContainer = connect(mapToStateProps, mapToDispatchProps)(MyPosts);
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