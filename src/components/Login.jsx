import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Context} from "../index";

const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider)
    }

    return (
        <Container>
            <Grid container alignItems={'center'} justifyContent={'center'} style={{height: window.innerHeight - 70}}>
                <Grid style={{width: 400, background: 'lightgray'}}
                      container
                      alignItems={'center'}
                      direction={'column'}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={'contained'}>Login with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;