import {styled} from '@mui/material';

export const AppStyles = styled('div')(()=>({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    fontFamily: 'Roboto',
}));

export const GlobalStyles = styled('div')(()=>({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100wh',
    fontFamily: 'Roboto',
}));
