import { AppBar, Box, Button, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import ProfileIcon from "../../profileIcon";

import React from "react";
import App from "../../../pages/App/App";
import { Link } from "react-router-dom";

function HeaderAluno(){
    return (
        <AppBar
        sx={{
          bgcolor: "#189AB4",
          height: "65px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'space-between',
          
        }}
      >
      <Box 
      sx={{
          display:'flex',
      }}
      >
        <Link to={"/HomeAluno"}>
        <Button
          sx={{
            color: "black",
            width: "200px",
            height: "45px",
            bgcolor: "white",
            borderRadius: "10px",
            marginLeft: "60px",
            gap: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: 'transform 0.3s ease',
            ':hover': {bgcolor: 'white',  transform: 'scale(1.1)'},
            textDecoration: 'none'
          }}
        >
          <MenuBookIcon fontSize="large" />
         
          <Typography sx={{ fontWeight: "bold" }}>Quests</Typography>
        </Button>
        </Link>
  
        </Box>
          <Box sx={{
            display:'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
          <Typography sx={{
            color: 'black',
            fontWeight:'bold'
          }}>Bem Vindo(a)</Typography>
          <ProfileIcon tam={50} color="white"/>
          </Box>
        
      </AppBar>
    );
}

export default HeaderAluno;