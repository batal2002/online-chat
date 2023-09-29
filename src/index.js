import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyBjp69DB3VwSv8h2Avv_IQu51mpwaN8LSs",
    authDomain: "chat-react-e4209.firebaseapp.com",
    projectId: "chat-react-e4209",
    storageBucket: "chat-react-e4209.appspot.com",
    messagingSenderId: "282482560980",
    appId: "1:282482560980:web:b53462bf42a147bfc39041"
})

export const Context = createContext(null)

const auth = getAuth(app)
const firestore = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>
);
