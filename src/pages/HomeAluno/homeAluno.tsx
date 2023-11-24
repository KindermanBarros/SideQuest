import React from "react";
import Card from "../../shared/components/card/Card";
import { Box, Typography } from "@mui/material";
import HeaderAluno from "../../shared/components/HeaderAluno/HeaderAluno";

function HomeAluno(){
    return (
        <Box  sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:'center',
            height: "100vh",
            bgcolor: "#05445E",
          }}>
            <HeaderAluno/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '150px'
      }}>
        <Typography sx={{
        fontWeight: 'bold',
        fontSize:'30px',
        marginRight: '55%',
      }}>Suas Quests</Typography>
        <Box sx={{
            display:'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '12px'
        }}>

          <Card title="HTML" subtitle="03/09/2024" body="Sergio" buttonText="test" />
          <Card title="React" subtitle="20/05/2024" body="Phelipe" buttonText="test" />
        
    
        </Box>
        
      </Box>
        </Box>
    );

}

export default HomeAluno