import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNavbar from "./components/generic/navbar";
import Story from "./pages/story"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Story} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
