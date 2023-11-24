import { Button, buttonBaseClasses } from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';

function ProfileIcon(){
    return (
        <Button
        sx=
        {{
            borderRadius: '50%',
            bgcolor: 'white',
            height: '55px',
            marginRight: '20px'
        }}>
            <PersonIcon fontSize="large"/>
        </Button>

    )

}

export default ProfileIcon;