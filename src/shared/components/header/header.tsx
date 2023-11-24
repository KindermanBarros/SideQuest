import { AppBar, Button, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';


function Header(){
    return (
        <AppBar sx={{bgcolor: '#3F71D3', height:'65px', display: 'flex', flexDirection:'row', alignItems:'center'}}>
            <Button sx={{color:'black', width:'200px', height:'45px', bgcolor: 'white', borderRadius:'10px', marginLeft: '60px', gap: '20px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
              <MenuBookIcon fontSize="large"/>
              <Typography sx={{fontWeight:'bold'}}>Quests</Typography> 
            </Button>

            <Button sx={{color:'black', width:'200px', height:'45px', bgcolor: 'white', borderRadius:'10px', marginLeft: '100px', gap: '20px', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                <AddIcon fontSize="large"/>
                <Typography sx={{fontWeight:"bold"}}>Criar card</Typography>
            </Button>
            
        </AppBar>
    );
}

export default Header;