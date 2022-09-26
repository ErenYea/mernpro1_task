import React from "react";
import "./Post.css";

const Post = ({ title, description, image, user }) => {
  var base64 = btoa(
    new Uint8Array(image.data.data).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
    }, "")
  );
  console.log(image.data.data);
  return (
    <div className="post">
      <img src={"data:image/png;base64," + base64} alt="Coludnot load image" />
      <div className="post__body">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="author">
          Created By <i>{user}</i>
        </p>
      </div>
    </div>
  );
};

export default Post;
