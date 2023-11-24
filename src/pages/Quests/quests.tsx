import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../../shared/header/header";
import BasicCard from "../../shared/components/card/card";

function Quests(){
    return (
        <Box  sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:'center',
            height: "100vh",
            bgcolor: "#05445E",
          }}>
            <Header/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '150px'
      }}>
        <Typography sx={{
        fontWeight: 'bold',
        fontSize:'30px',
        marginRight: '55%',
      }}>Quests</Typography>
        <Box sx={{
            display:'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '12px'
        }}>
        <BasicCard title="HTML" image="zap"/>
        <BasicCard title="HTML" image="zap"/>
        <BasicCard title="HTML" image="zap"/>
        <BasicCard title="HTML" image="zap"/>
        <BasicCard title="HTML" image="zap"/>
        <BasicCard title="HTML" image="zap"/>
        </Box>
        
      </Box>
        </Box>
    );
}

export default Quests;