import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Signup.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const Signup = (e) => {
    e.preventDefault();
    console.log(value);
    axios
      .post("/signup", {
        email: email,
        password,
        type: value,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: "SET_USER",
          payload: {
            user: email,
            type: value,
          },
        });
        if (value == "Viewer") {
          navigate("/posts");
        } else {
          navigate("/create");
          // window.location = "/create";
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
    // co
  };
  if (state.user != null) {
    if (state.type == "Creater") {
      return <Navigate to="/create" />;
    } else {
      return <Navigate to="/posts" />;
    }
  } else {
    return (
      <div className="signup">
        {/* <h2>SignUp Here</h2> */}
        <form>
          <div className="email__container">
            <h3>Email</h3>
            <input
              type="email"
              className="signup__email"
              placeholder="Type Email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password__container">
            <h3>Password</h3>
            <input
              type="password"
              className="signup__password"
              placeholder="Type password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* radiobutton for type of account */}
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Account Type
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Creater"
              name="radio-buttons-group"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <FormControlLabel
                value="Creater"
                control={<Radio />}
                label="Creater"
              />
              <FormControlLabel
                value="Viewer"
                control={<Radio />}
                label="Viewer"
              />
            </RadioGroup>
          </FormControl>

          <Button type="submit" onClick={Signup}>
            Signup
          </Button>
        </form>
      </div>
    );
  }
};

export default Signup;
