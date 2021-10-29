import classes from './MyPosts.module.css';
import Post from './OnePost/Post';
import { ProfilePageType } from '../../../redux/profileReduser';
import React, { KeyboardEvent } from 'react';

type MyPostsPropsType = {
  profilePage: ProfilePageType
  postChange: (text: string) => void
  addPost: () => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  let postsElements = props.profilePage.postsData.map(p => <Post message={p.message} likecount={p.likecount} />);

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  function onAddPost() {
    props.addPost();
  }
  function onPostChange() {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      props.postChange(text);
    }
  }
  function onPressEnter(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      props.addPost();
    }
  }

  return (
    <div className={classes.item}>
      <h3>My posts</h3>
      <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} onKeyPress={onPressEnter} />
      <div>
        <button onClick={onAddPost}>Add motivation</button>
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