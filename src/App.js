import "./App.css";
import Home from "./components/Home.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
} from "react-router-dom";
import SearchPage from "./components/SearchPage.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
