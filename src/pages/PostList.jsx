import React from "react";
import { useState, useEffect } from "react";
import PostItem from "../components/PostItem";

function PostList() {
  const [postData, setPostData] = useState([]);

  function onDelete(post) {
    setPostData(postData.filter((p) => p.id != post.id));
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setPostData(json);
      });
  }, []);

  // return <pre>{JSON.stringify(postList, undefined, 2)}</pre>;
  return (
    <div>
      {postData.map((post) => (
        // <h1 key={post.id}>{post.title}</h1>
        <PostItem key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PostList;
