import React, { useEffect, useState } from "react";
import "./ViewPost.css";
import Post from "./Post";
import Pusher from "pusher-js";
import axios from "./axios";
import { Navigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
const ViewPost = () => {
  const [state, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetchin posts
    axios
      .get("/post")
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   var pusher = new Pusher("69b5a077e6f30925c3f7", {
  //     cluster: "ap2",
  //   });

  //   var channel = pusher.subscribe("posts");
  //   channel.bind("inserted", function (data) {
  //     console.log("data:", data);
  //     //   setPosts([...posts, data]);/
  //     //   alert(JSON.stringify(data));
  //   });
  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, [posts]);

  console.log(posts);
  if (state.user == null) {
    return <Navigate to="/signup" />;
  } else if (state.type == "Creater") {
    return <Navigate to="/create" />;
  } else if (posts.length == 0) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
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
