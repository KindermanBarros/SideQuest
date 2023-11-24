import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import ProfileIcon from "./ProfileIcon";

function RankList({nome, ponto, rank}: {nome:string, ponto:number, rank:number}){

    

    return (
        <List component='ol' sx={{
            display:'flex',
            flexDirection:'column',
            alignItems: 'center',
            p: '12px',
            marginTop: '10px'
          }}>
            <ListItem component='li' sx={{
              borderBottom:'1px solid black',
              display:'flex',
              alignItems: 'center',
              height: '30px',
              justifyContent: 'space-between'
            }}>
              <Typography sx={{
                fontWeight: 'bold',
              }}>{rank}</Typography>
              
              <ProfileIcon tam={10} color="white"/>

              <Typography sx={{
                fontWeight: 'bold',
                marginRight: '20px',
                display:'flex',
                justifyContent: 'space-between',
                alignItems:'center'
              }}>
              {nome}
              </Typography>

              
            <Typography sx={{
              fontWeight:'bold',
              marginRight: '20px',
              color: '#C327EA'
            }}>{ponto}</Typography>

            </ListItem>
          </List>
            
    );
}

export default RankList;