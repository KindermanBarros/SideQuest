import { Button } from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

function ProfileIcon({tam, color}: {tam:number, color:string}){

    return (
        <Link to="/HomeAluno">
        <Button
        sx=
        {{
            borderRadius: '50%',
            bgcolor: `${color}`,
            height: `${tam}px`,
            width: `${tam}px`,
            marginRight: '20px',
            ':hover': {bgcolor: 'white'}

        }}>
            <PersonIcon fontSize="large"/>
        </Button>
        
        </Link>
    )

}

export default ProfileIcon;