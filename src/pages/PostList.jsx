import React from "react";
import { useState, useEffect } from "react";
import PostItem from "../components/PostItem";

function PostList() {
  const [postList, setPostList] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPostList(json);
      });
  }, []);

  // return <pre>{JSON.stringify(postList, undefined, 2)}</pre>;
  return (
    <div>
      <PostItem />
    </div>
  );
}

export default PostList;
