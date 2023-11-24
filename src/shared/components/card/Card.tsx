import React from 'react';
import { styled } from '@mui/material';
import { Card as MuiCard, CardContent, Typography, Button } from '@mui/material';

const StyledCard = styled(MuiCard)({
  minWidth: 200,
  minHeight: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  borderRadius: 10,
});

const StyledCardBottom = styled(MuiCard)({
  minWidth: 300,
  minHeight: 300,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  borderRadius: 10,
  color: '#D4F1F4',
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

const Card: React.FC<CardProps> = ({ title, subtitle, body, buttonText }) => {
  return (
    <StyledCard>
      <CardContent>
        <StyledTypography>
          {title}
        </StyledTypography>
        <StyledTypography >
          {subtitle}
        </StyledTypography>
        <StyledTypography>
          {body}
        </StyledTypography>
      </CardContent>
    </StyledCard>
  );
};

export default Card;