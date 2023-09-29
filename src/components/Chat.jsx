import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {addDoc, collection, orderBy, query, serverTimestamp} from "firebase/firestore";
import Loader from "./Loader";

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(query(
            collection(firestore, 'messages'),
            orderBy('createdAt')
        )
    )

    if (loading) return <Loader/>
    const sendMessage = async () => {
        await addDoc(collection(firestore, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: serverTimestamp()
        });
        setValue('')
    }

    return (<Container>
        <Grid container justifyContent={'center'} style={{height: window.innerHeight - 70, marginTop: 5}}>
            <div style={{width: '80%', height: '70vh', border: '1px solid grey', overflow: 'auto'}}>
                {messages.map(message =>
                    <div key={message.createdAt}
                         style={{
                             margin: 10,
                             border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                             marginLeft: user.uid === message.uid ? 'auto' : 10,
                             width: 'fit-content',
                             padding: 5
                         }}
                    >
                        <Grid container>
                            <Avatar imgProps={{referrerPolicy: "no-referrer"}} src={message.photoURL}/>
                            <div>{message.displayName}</div>
                        </Grid>
                        <div>{message.text}</div>
                    </div>)}
            </div>
            <Grid container direction={'column'} alignItems={'flex-end'} style={{width: '80%'}}>
                <TextField value={value} onChange={(e) => setValue(e.target.value)} fullWidth maxRows={2}
                           variant={'outlined'}/>
                <Button onClick={sendMessage} variant={'contained'}>Send</Button>
            </Grid>
        </Grid>
    </Container>);
};

export default Chat;