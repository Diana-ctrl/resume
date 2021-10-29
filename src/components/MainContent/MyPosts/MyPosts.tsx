import classes from './MyPosts.module.css';
import Post from './OnePost/Post';
import { ProfilePageType } from '../../../redux/store';
import React, {KeyboardEvent} from 'react';
import {AllActionsType, addPostActionCreator, onPostChangeActionCreator} from '../../../redux/store'

type MyPostsPropsType = {
  profilePage: ProfilePageType
  dispatch: (action: AllActionsType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  let postsElements = props.profilePage.postsData.map(p => <Post message={p.message} likecount={p.likecount} />);

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  function addPost() {
      props.dispatch(addPostActionCreator());
  }
  function onPostChange() {
    if (newPostElement.current) {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text)); 
    }
  }
  function pressEnter(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      props.dispatch(addPostActionCreator());
    }
}

  return (
    <div className={classes.item}>
      <h3>My posts</h3>
      <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} onKeyPress={pressEnter}/>
      <div>
        <button onClick={addPost}>Add motivation</button>
      </div>
      <div>
        <button>Remove</button>
      </div>
      <div className={classes.post}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;