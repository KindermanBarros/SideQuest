import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#189AB4",
    },
    secondary: {
      main: "#05445E",
    },
    error: {
      main: "#red",
    },
    background: {
      default: "#D4F1F4",
    },
  },
});

export default theme;  
