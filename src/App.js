import "./App.css";
import CreatePost from "./CreatePost";
import Signup from "./Signup";
import { useStateValue } from "./StateProvider";
import ViewPost from "./ViewPost";
// import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [state, dispatch] = useStateValue();
  console.log(state);
  return (
    <div className="app">
      <div className="app__body">
        {state.user ? (
          state.type === "Creater" ? (
            <CreatePost />
          ) : (
            <ViewPost />
          )
        ) : (
          <Signup />
        )}
        {/* <CreatePost /> */}
        {/* <ViewPost /> */}
      </div>

      {/* Hello */}
    </div>
  );
}

export default App;
