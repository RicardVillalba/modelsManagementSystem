import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import NavBar from "./components/navBar";
import ModelsList from "./components/modelsList";
import Model from "./components/model";
import data from "./components/data";
import SplashScreen from "./components/splashscreen";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="App">
          <Router>
            <NavBar />

            <Route
              render={({ location }) => (
                <AnimatePresence initial={false} exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/women">
                      <ModelsList data={data} />
                    </Route>
                    <Route path="/model/:id">
                      <Model data={data} />
                    </Route>
                  </Switch>
                </AnimatePresence>
              )}
            />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
