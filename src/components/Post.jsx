import { useEffect, useState } from "react";
import "../styles/Post.css";
import axios from "axios";

const Post = (props) => {
  const [user, setUser] = useState({});
  const [comments,setComments]=useState([]);

  const getUser = async (userid) => {
    const url = `https://gorest.co.in/public/v2/users/${userid}`;
    const res = await axios.get(url);
    const data = await res.data;

    if(res.status === 200) {
      setUser(data);
    }
  };

  useEffect(()=>{
    console.log(props.userid);
    getUser(props.userid)
  },[])

  const handleCmt=(e)=>{
    const url=`https://gorest.co.in/public/v2/comments?post_id=${props.postid}`;
    const res=axios.get(url);
    let data=res.data;
    
    console.log("hit")
    if(res.status===200){
      setComments([...data]);
      console.log(comments)
    }
  }
  return (
    <div className="post" id={props.postid} onClick={(e)=> handleCmt(e)}>
      
      <div className="post_title">{props.title}</div>
      <div className="post_body">{props.body}</div>
      <div className="post_footer">
        <span className="user_name"><i class="uil uil-user-square"></i> {user.name ? user.name:"John Player"}</span>
        <span className="user_email"><i class="uil uil-envelope-alt"></i> {user.email? user.email:"john@hotmail.com"}</span>
        <span className="user_gender">{user.gender==="male"?<i class="uil uil-mars"></i>:<i class="uil uil-venus"></i>}{user.gender? user.gender :"not disclosed"} </span>
      </div>
    </div>
  );
};

export default Post;
