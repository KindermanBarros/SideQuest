import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(RouterLink)({
    textDecoration: 'none',
    color: '#FFFFFF',
});

interface Props {
    to: string;
    children: ReactNode;
}

const UnvisitedLink: React.FC<Props> = ({ to, children }) => {
    return (
        <StyledLink to={to}>
            {children}
        </StyledLink>
    );
};

export default UnvisitedLink;
