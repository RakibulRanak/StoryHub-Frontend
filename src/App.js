import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from './components/generic/navbar';
import NotFound from './pages/404';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Stories from './pages/stories';
import Story from './pages/story';

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
