import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import welcome from '../Assets/Images/welcome.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%',
    borderRadius: '50%', // Adjust this to make it an oval shape
    objectFit: 'cover'
});

const TextContainer = styled(Box)`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
`;

const CodeForInterview = () => {
    return (
        <Header>
            <Typography variant="h4">Home page</Typography>
            <Box style={{ display: 'flex' }}>
                <TextContainer>
                    <Typography variant="h6">
                        Welcome to our website! Enjoy exploring.
                    </Typography>
                </TextContainer>
                <Image src={welcome} alt="Welcome Image" />
            </Box>
        </Header>
    );
}

export default CodeForInterview;
