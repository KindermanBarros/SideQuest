import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../../shared/header/header";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:'center',
        height: "100vh",
        bgcolor: "#05445E",
      }}
    >
      <Header />
      <Typography sx={{
        fontWeight: 'bold',
        fontSize:'30px',
        marginRight: '55%'
      }}>RANKING</Typography>

      <Box sx={{ 
        bgcolor: "white",
        height: "50%",
        width:'65%',
        borderRadius: '10px' 
        }}>
        ''    
        </Box>
    </Box>
  );
}

export default Home;
