import Header from "./components/Header";
import GetApi from "./components/GetApi";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import OwnCard from "./components/OwnCard";
import FindCharacter from "./components/FindCharacter";
import React, {useState} from "react";


export const NameContext = React.createContext()


function App() {
  
  const [name, setName] = useState('')
  const newName =()=> setName()
  return (
    <>
      <Router>
        <Switch>
          <NameContext.Provider value={{name}}>
          <Route path="/" exact>
            <Header />
            <GetApi />
          </Route>
          <Route path="/character/:id">
            <OwnCard/>
          </Route>
          <Route path="/search/:name">
            <FindCharacter newName={{newName}}/>
          </Route>
          </NameContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
