import { Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';


// I prefer this way of exporting because it's all done at once. Love the simplicity.
export default function NavigationBar() {
    return (
        <Container>
            <Toolbar>
                <Typography>
                    Stella Verona Consulting
                </Typography>
            </Toolbar>
        </Container>
    );
}