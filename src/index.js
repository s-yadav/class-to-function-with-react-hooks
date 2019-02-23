import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import routes from "./routes";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="page-title">
          Map Class Component to Functional Component
        </h1>
      </header>
      <nav className="nav">
        {routes.map(({ path, label }) => (
          <Link to={path} key={path} className="nav-link">
            {label}
          </Link>
        ))}
      </nav>
      <div className="content">
        {routes.map(({ path, component }) => (
          <Route path={path} key={path} component={component} />
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
