import { Box, Button, Typography, buttonBaseClasses } from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';

function ProfileIcon({tam, color}: {tam:number, color:string}){

    return (
        <Button
        sx=
        {{
            borderRadius: '50%',
            bgcolor: `${color}`,
            height: `${tam}px`,
            marginRight: '20px',
            ':hover': {bgcolor: 'white'}

        }}>
            <PersonIcon fontSize="large"/>
        </Button>
    )

}

export default ProfileIcon;