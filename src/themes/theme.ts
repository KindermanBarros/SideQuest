import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#189AB4",
    },
    secondary: {
      main: "#D4F1F4",
    },

    //#D4F1F4
    error: {
      main: "#red",
    },
    background: {
      default: "#05445E",
    },
  },
});

export default theme;
