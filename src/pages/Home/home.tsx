import { AppBar, Box, Container, List, ListItem, Typography } from "@mui/material";
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
          {/* O box abaixo é para o header da div Ranking */}
          <Box sx={{
            borderBottom: '1px solid black',
            height: '12%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography sx={{
              fontWeight:'bold',
              marginLeft:'25px'
            }}>Nº</Typography>
            <Typography sx={{
              fontWeight: 'bold',
            }}>Aluno</Typography>
            <Typography sx={{
              fontWeight:'bold',
              marginRight:'12px'
            }}>Pontuação</Typography>
          </Box>

          <List component='ol' sx={{
            display:'flex',
            flexDirection:'column',
            alignItems: 'center',
            p: '10px'
          }}>
            <ListItem component='li' sx={{
              borderBottom:'1px solid black',
              display:'flex',
              alignItems: 'center',
              height: '40px'
            }}>
              <Typography sx={{
                fontWeight: 'bold'
              }}>1</Typography>
            </ListItem>

          </List>
          
        </Box>
    </Box>
  );
}

export default Home;
