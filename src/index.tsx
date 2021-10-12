import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bricks from "./components/bricks/bricks";
import Footer from "./components/footer";
import { StarsProvider } from "./components/stars-provider";
import About from "./components/about/about";
import Header from "./components/header/header";
import Set from "./components/set/set";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="header">
        <Header />
      </div>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="background">
        <div className="content shadow-l is-flex is-flex-direction-column">
          <div className="is-flex-grow-1">
            <StarsProvider>
              <Switch>
                <Route path="/about" exact component={About} />
                <Route path="/set/:set_num" exact component={Set} />
                <Route path="/" exact component={Bricks} />
              </Switch>
            </StarsProvider>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
