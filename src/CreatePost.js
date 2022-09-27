import { Button } from "@mui/material";
import React, { useState } from "react";
import "./CreatePost.css";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const [state, dispatch] = useStateValue();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const createpost = () => {
    console.log(file);
    if (!file[0].type.includes("image")) {
      alert("Please insert the image file");
      setFile("");
      return;
    }
    // send the data to the server for creating post
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user", state.user);
    // console.
    // formData.append('')
    // const data = {
    //   title,
    //   description,
    //   file: file,
    // };
    // {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // // },
    // axios
    //   .post("/createpost", formData)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));
    console.log(formData);
    setDescription("");
    setFile("");
    setTitle("");
  };
  if (state.user == null) {
    return <Navigate to="/signup" />;
  } else if (state.user == "Viewer") {
    return <Navigate to="/posts" />;
  }
  console.log("file", file);
  return (
    <div className="createPost">
      <div className="createPost__title">
        <h2>Title</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="createPost__description">
        <h2>Description</h2>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="createPost__file">
        <label class="custom-file-upload">
          <input
            type="file"
            accept="images/*"
            onChange={(e) => setFile(e.target.files)}
          />
          File Upload
        </label>

        <div className="filename">
          <strong>FileName: </strong>
          <p>{file != "" ? file[0].name : "No file selected"}</p>
        </div>
        <div className="preview__image">
          {file != "" ? (
            <img src={URL.createObjectURL(file[0])} alt="../" />
          ) : (
            ""
          )}
        </div>
      </div>

      <Button onClick={createpost}>Create Post</Button>
      {/* <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} /> */}
    </div>
  );
};

export default CreatePost;
