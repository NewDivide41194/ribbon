import "./App.css";
import React from 'react'
import NavBar  from "./app/navBar";
import { Footer } from "./app/footer";

import { Route, Switch, Redirect,withRouter } from "react-router-dom";
import Routes from "./routes";
import ErrorPage from "./pages/Error/errors";
import HomeContainer from "./pages/Home/container/homeContainer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        {
          Object.keys(Routes.routes).map((v, k) => (
            <Route
              key={k}
              path={`/${v}`}
              component={Routes.routes[v].component}
            />
          ))
        }
        {/* <Redirect to="/" /> */}

        <Route
          path="*"
          component={() => <ErrorPage ErrorInfo={"Page Not Found!"} />}
        />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
