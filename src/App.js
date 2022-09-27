import "./App.css";
import CreatePost from "./CreatePost";
import Signup from "./Signup";
import { useStateValue } from "./StateProvider";
import ViewPost from "./ViewPost";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  // const [state, dispatch] = useStateValue();
  // console.log(state);
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/posts" element={<ViewPost />} />
          </Routes>
        </Router>
        {/* <CreatePost /> */}
        {/* <ViewPost /> */}
      </div>

      {/* Hello */}
    </div>
  );
}
// {state.user ? (
//           state.type === "Creater" ? (
//             // <Route path="/createpost" element={<CreatePost />} />
//             <CreatePost />
//           ) : (
//             // <Route path="/post" element={<ViewPost />} />
//             <ViewPost />
//           )
//         ) : (
//           // <Route path="/signup" element={<Signup />} />
//           <Signup />
//         )}

export default App;
