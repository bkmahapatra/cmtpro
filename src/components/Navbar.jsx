import React from 'react'

const Navbar = () => {
    const navstyle={
        backgroundColor:"black",
        color:"white",
        "font-size":'25px',
        padding:"10px",
        "font-weight":"500",
        position:"fixed",
        width:"100%",
        top:"0",
        cursor:"pointer"
    }
    return (
    <div>

       <a className="app_name" style={navstyle} href="/"><i class="uil uil-comment-alt-heart"></i>BlogPost</a>
    </div>
  )
}

export default Navbar