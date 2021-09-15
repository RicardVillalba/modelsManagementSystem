import "./App.css";
import NavBar from "./components/navBar";
import ModelsList from "./components/modelsList";
import Model from "./components/model";
import data from "./components/data";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/women">
          <ModelsList data={data} />
        </Route>
        <Route path="/model/:id">
          <Model data={data} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
