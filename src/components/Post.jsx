import '../styles/Post.css'
const Post = (props) => {
  return (
    <div className="post">
        <div className="post_title">{props.title}</div>
        <div className="post_body">{props.body}</div>
        <div className="post_footer">
            <span className="user_name">{props.userName}</span>
            <span className="user_email">{props.userEmail}</span>
            <span className="user_gender">{props.userGender}</span>
        </div>
    </div>
  )
}

export default Post