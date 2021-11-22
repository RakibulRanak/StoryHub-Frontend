import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNavbar from "./components/generic/navbar";
import Stories from "./pages/stories"
import Story from "./pages/story"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn";
import NotFound from "./pages/404";



function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/stories/:id" component={Story} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Stories} />
        <Route path="*" component={NotFound} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
