import classes from './Post.module.css'

type PostType = {
  message: string
  likecount: number
}

const Post: React.FC<PostType> = (props) => {

  return (
    <div className={classes.item}>
      <div>
        <img alt='Can not add' src='https://hi-news.ru/wp-content/uploads/2016/05/razum-750x521.jpg' />
            {props.message}
          </div>
      <div>
        <span>
          {props.likecount} Likes
        </span>
      </div>
    </div>
  );
}

export default Post;