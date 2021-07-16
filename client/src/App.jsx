
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/singlePost/SinglePost";

function App() {

  const user = true;
  return (
    <Router>
    <Topbar/>
    <Switch>
      <Route exact path="/">
      <Homepage/>
      </Route>
      <Route path="/posts">
          <Homepage />
        </Route>
      <Route path="/register">
      {user? <Homepage/> : <Register/>}
      </Route>
      <Route path="/login">
     { user? <Homepage/> : <Login/>}
      </Route>
      <Route path="/write">
      {user? <Write/> : <Login/>}
      </Route>
      <Route path="/settings">
      {user? <Settings/> : <Login/>}
      </Route>
      <Route path="/post/:id">
      <Single/>
      </Route>

    </Switch>

  
    </Router>
  );
}

export default App;
