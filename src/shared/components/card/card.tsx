import React from 'react';
import { styled } from '@mui/material';
import { Card as MuiCard, CardContent, Typography, Button } from '@mui/material';
import theme from '../../../themes/theme';

const StyledCard = styled(MuiCard)({
  minWidth: 275,
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
  buttonText: string;
}

const card: React.FC<CardProps> = ({ title, buttonText }) => {
  return (
    <StyledCard>
      <CardContent>
        <StyledTypography color="text.secondary" gutterBottom>
          {title}
        </StyledTypography>
        <Typography variant="h5" component="div">
          be•nev•o•lent
        </Typography>
        <Typography mb={1.5} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <StyledButton variant="contained" color="primary">
        {buttonText}
      </StyledButton>
    </StyledCard>
  );
};

export default card;