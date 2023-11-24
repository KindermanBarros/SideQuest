import * as React from 'react';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const StyledCard = styled(Card)({
  minWidth: 275,
});

const StyledTypography = styled(Typography)({
  fontSize: 14,
});

const StyledCardActions = styled(CardActions)({
  // Add any additional styling for CardActions if needed
});

const StyledButton = styled(Button)({
  // Add any additional styling for Button if needed
});

interface CardProps {
  title: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, buttonText }) => {
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

export default Card;

