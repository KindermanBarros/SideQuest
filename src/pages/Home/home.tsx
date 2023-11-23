import { AppBar, Container, Typography } from "@mui/material";
import React from "react";

function Home(){
    return (
        <AppBar elevation={0}>
            <Typography sx={{color: 'black', bgcolor:'white', boxShadow:'none'}}>Test</Typography>
        </AppBar>
    )
}

export default Home;