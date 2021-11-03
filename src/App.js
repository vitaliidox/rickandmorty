import Header from "./components/Header";
import GetApi from "./components/GetApi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OwnCard from "./components/OwnCard";
import FindCharacter from "./components/FindCharacter";





function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <GetApi />
          </Route>
          <Route path="/character/:id">
            <OwnCard/>
          </Route>
          <Route path="/search/:name">
            <FindCharacter/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
