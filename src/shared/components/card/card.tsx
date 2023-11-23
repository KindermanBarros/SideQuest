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

// Modified BasicCard component
const BasicCard = ({ title, image }: { title: string; image: string }) => {
    return (
        <StyledCard>
            <CardContent>
                <StyledTypography color="text.secondary" gutterBottom>
                    {title}
                </StyledTypography>
                {/* Use the title prop dynamically */}
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
                {/* Use the image prop dynamically */}
                <Typography mb={1.5} color="text.secondary">
                    adjective
                </Typography>
            </CardContent>
            <StyledCardActions>
                <StyledButton size="small">Learn More</StyledButton>
            </StyledCardActions>
        </StyledCard>
    );
};

export default BasicCard;

