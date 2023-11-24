import { Button, buttonBaseClasses } from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';

function ProfileIcon({tam}: {tam:number}){
    return (
        <Button
        sx=
        {{
            borderRadius: '50%',
            bgcolor: 'white',
            height: `${tam}px`,
            marginRight: '20px',

        }}>
            <PersonIcon fontSize="large"/>
        </Button>

    )

}

export default ProfileIcon;