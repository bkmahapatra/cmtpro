import React from 'react'

const Comment = (props) => {
  return (
    <div className='comment'>
        <div className="cmt_userName">{props.userName}</div>
        <div className="cmt_body">{props.body}</div>
    </div>
  )
}

export default Comment