import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
import Home from "./Home";
import Export from "./Export";

export default function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div>
        <header>
          <Link to="/">
            {" "}
            <div className="container-header">
              <img className="logo" src={logo} alt="my-logo" />

              <div className="vita">VITA</div>
            </div>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/Export">New CV</Link>
              </li>
              <li>
                <Link to="/Home">View all</Link>
              </li>{" "}
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/Export" component={Export} />
          <Route path="/" component={Home} />
        </Switch>

        <footer>
          <h3>Copyright &copy; Laplacian d.o.o. All rights reserved</h3>
        </footer>
      </div>
    </BrowserRouter>
  );
}
