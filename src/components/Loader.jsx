import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid container alignItems={'center'} justifyContent={'center'} style={{height: window.innerHeight - 70}}>
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Grid>
        </Container>
    );
};

export default Loader;