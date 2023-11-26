import { styled, keyframes } from "@mui/system";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled("img")(({ theme }) => ({
  marginTop: "50px",
  height: "20vmin",
  pointerEvents: "none",
  animation: `${spin} infinite 20s linear`,
}));

export const AppContainer = styled("div")({
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
});

export const AppHeader = styled("header")({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
});

export const StyledDiv = styled("div")({
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

