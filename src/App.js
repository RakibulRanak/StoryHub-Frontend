import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNavbar from "./components/generic/navbar";
import Stories from "./pages/stories"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn";





function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Stories} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
