import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (<AppBar position="static">
        <Toolbar>
            <Grid container justifyContent={'flex-end'}>
                {user ?
                    <Button onClick={() => signOut(auth)} variant="contained">Logout</Button> :
                    <Link to={LOGIN_ROUTE}>
                        <Button variant="contained">Login</Button>
                    </Link>
                }
            </Grid>
        </Toolbar>
    </AppBar>);
};

export default Navbar;