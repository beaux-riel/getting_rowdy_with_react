import { Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Title from './components/Header/Title';
import Logo from './components/Header/Logo';


// I prefer this way of exporting because it's all done at once. Love the simplicity.
export default function NavigationBar() {
    return (
        <Container>
            <Toolbar>
                <Logo />
                <Title />
                <Typography>
                </Typography>
            </Toolbar>
        </Container>
    );
};