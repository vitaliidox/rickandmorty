import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import GetApi from "./components/GetApi";
import OwnCard from "./components/OwnCard";


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
        </Switch>
      </Router>
    </>
  );
}

export default App;
