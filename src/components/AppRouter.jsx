import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import Chat from "./Chat";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import Login from "./Login";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, component}) =>
                    <Route key={path} path={path} element={component}/>
                )}
                <Route path={CHAT_ROUTE} element={<Chat/>}/>
                <Route path={'/*'} element={<Navigate to={CHAT_ROUTE}/>}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, component}) =>
                    <Route key={path} path={path} element={component}/>
                )}
                <Route path={LOGIN_ROUTE} element={<Login/>}/>
                <Route path={'/*'} element={<Navigate to={LOGIN_ROUTE}/>}/>
            </Routes>
        )
};

export default AppRouter;