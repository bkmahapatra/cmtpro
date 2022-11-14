import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Post from "./components/Post";
import Navbar from "./components/Navbar";

function App() {
  const [posts, setPosts] = useState([]);
  const [curPage, setCurPage] = useState(1);

  const updateData = async () => {
    console.log("update data");
    const url = `https://gorest.co.in/public/v2/posts?page=${curPage}`;
    const res = await axios.get(url);
    const data = await res.data;
    console.log(data.length);

    setPosts((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    updateData();
  }, [curPage]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        setCurPage((prev) => prev + 1);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
        {console.log("render")}
        {posts.map((item) => {
          return (
            <Post
              key={item.id}
              title={item.title}
              body={item.body}
              userid={item.user_id}
              postid={item.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
