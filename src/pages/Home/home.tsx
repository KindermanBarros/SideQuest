import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../../shared/header/header";


function Home(){
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            bgcolor: '#05445E'
        }}>
            <Header/>
            
            <Typography sx={{fontWeight: 'bold'}}>Ranking</Typography>

            <Box>

            </Box>
        </Box>
        
    )
} 

export default Home;