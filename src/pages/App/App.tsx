import React from "react";
import { AppContainer, AppHeader, AppLogo, StyledDiv} from "./AppStyles";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

const App: React.FC = () => {
  return (
    <AppContainer>
      <AppHeader>
        <Link to="/signin">
          <AppLogo src={logo} alt="logo" />
        </Link>
        <StyledDiv>
          <p>
            Sidequest é uma plataforma para utilização de quests em sala de
            aula.
          </p>
          <p>Dever de casa nunca foi tão divertido!</p>
          <p>Toque na logo para fazer login!</p>
        </StyledDiv>
      </AppHeader>
    </AppContainer>
  );
};

export default App;
