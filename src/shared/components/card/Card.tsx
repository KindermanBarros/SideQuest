import React from 'react';
import { styled } from '@mui/material';
import { Card as MuiCard, CardContent, Typography, Button } from '@mui/material';

const StyledCard = styled(MuiCard)({
  minWidth: 300,
  minHeight: 300,
  // Add more styling as needed
});

const StyledTypography = styled(Typography)({
  fontSize: 14,
  // Add more styling as needed
});

const StyledButton = styled(Button)({
  // Add styling for the button
});
interface CardProps {
  title: string;
  subtitle: string;
  body: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title,subtitle,body, buttonText }) => {
  return (
    <StyledCard>
      <CardContent>
        <StyledTypography color="text.secondary" gutterBottom>
          {title}
        </StyledTypography>
        <Typography variant="h5" component="div">
          {subtitle}
        </Typography>
        <Typography mb={1.5} color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <StyledButton variant="contained" color="primary">
        {buttonText}
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
