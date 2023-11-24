import React from "react";
import "./App.css";
import {Link} from 'react-router-dom'
import Card from "../../shared/components/card/card";


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/Home">
          test
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
        <Card buttonText="test" title="Titulo"/>
      </body>
    </div>
  );
};

export default App;
