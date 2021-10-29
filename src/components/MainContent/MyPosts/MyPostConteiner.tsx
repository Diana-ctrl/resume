import MyPosts from './MyPosts';
import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/store';
import { StoreType } from '../../../redux/reduxStore';

type MyPostsPropsContainerType = {
    store: StoreType
}
const MyPostsContainer: React.FC<MyPostsPropsContainerType> = (props) => {

    let state = props.store.getState();
    function addPost() {
        props.store.dispatch(addPostActionCreator());
    }
    function postChange(text: string) {
        props.store.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <MyPosts profilePage={state.profilePage} postChange={postChange} addPost={addPost} />
    )
}

export default MyPostsContainer;