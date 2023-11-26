import { AppBar, Box, Button, Typography, Backdrop } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import ProfileIcon from "../ProfileIcon";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CreateCardsModal from "../modal/CreateCards";

function Header() {
  const [showComponent, setShowComponent] = useState(false);
  const handleCloseModal = () => {
    setShowComponent(false);
  };
  return (
    <>
      <Backdrop
        open={showComponent}
        sx={{ color: '#fff', zIndex: 600, backdropFilter: 'blur(3px)' }}
      />
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
          <Link to={"/Quests"}>
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
          <Button
            onClick={() => setShowComponent(true)}
            sx={{
              color: "black",
              width: "200px",
              height: "45px",
              bgcolor: "white",
              borderRadius: "10px",
              marginLeft: "100px",
              gap: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: 'transform 0.3s ease',
              ':hover': {bgcolor: 'white',  transform: 'scale(1.1)'}
            }}
          >
            <AddIcon fontSize="large" />
            <Typography sx={{ fontWeight: "bold" }}>Criar card</Typography>
          </Button>
          {showComponent && (
  <CreateCardsModal onClose={handleCloseModal}/>
)}
        </Box>
        <ProfileIcon tam={50} color="white"/>
      </AppBar>
    </>
  );
}

export default Header;