import React from "react";
import "./App.css";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import Card from "../../shared/components/card/card";


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/signin">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <Card image="../../assets/icons/logo.svg" title="Titulo"/>
      </body>
    </div>
  );
};

export default App;
