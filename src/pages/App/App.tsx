import React from "react";
import "./App.css";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p />
        <Link to="/signin">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <p />
        <p>
          Sidequest é uma plataforma para utilização de quests em sala de aula.
        </p>
        <p>Dever de casa nunca foi tão divertido!</p>
        <p>Toque na logo para fazer login!</p>
      </header>

      <body>
        <Card buttonText="test" title="Titulo"/>
      </body>

    </div>
  );
};

export default App;
