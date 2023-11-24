import React from 'react';
import { Box, styled } from '@mui/material';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const StyledCard = styled(MuiCard)({
  minWidth: 200,
  minHeight: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  borderRadius: 10,
});


const StyledTypography = styled(Typography)({
  fontSize: 14,
  fontFamily: 'Roboto',
});


interface CardProps {
  title: string;
  subtitle: string;
  body: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, body }) => {
  return (
    <StyledCard>
      <CardContent sx={{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center'
      }}>
        <StyledTypography>
          <CheckBoxIcon fontSize='inherit'/> {title}
        </StyledTypography>
        <StyledTypography >
          <DateRangeIcon fontSize='inherit'/> {subtitle}
        </StyledTypography>
        <StyledTypography>
          <PeopleAltIcon fontSize='inherit'/> {body}
        </StyledTypography>
      </CardContent>
    </StyledCard>
  );
};

export default Card;