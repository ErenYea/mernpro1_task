import React, { useEffect, useState } from "react";
import "./ViewPost.css";
import Post from "./Post";
import axios from "./axios";
const ViewPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetchin posts
    axios
      .get("/post")
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);
  return (
    <div className="viewpost">
      {posts.map((post) => {
        return (
          <Post
            title={post.title}
            description={post.description}
            user={post.user}
            key={post._id}
            image={post.image}
          />
        );
      })}
    </div>
  );
};

export default ViewPost;
