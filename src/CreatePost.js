import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import "./CreatePost.css";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/system";

const CreatePost = () => {
  const [state, dispatch] = useStateValue();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [create, setCreate] = useState(false);
  const createpost = () => {
    console.log(file);
    setCreate(true);
    if (!file[0].type.includes("image")) {
      alert("Please insert the image file");
      setFile("");
      return;
    }
    // send the data to the server for creating post
    const formData = new FormData();
    formData.append("image", file[0]);
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
    axios
      .post("/createpost", formData)
      .then((response) => {
        setDescription("");
        setFile("");
        setTitle("");
        setCreate(false);
        console.log(response);
      })
      .catch((error) => console.log(error));
    console.log(formData);
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
      {create ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        ""
      )}
      <Button onClick={createpost} id="createpost">
        {create ? "Creating Post..." : "Create Post"}
      </Button>
      {/* <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} /> */}
    </div>
  );
};

export default CreatePost;
