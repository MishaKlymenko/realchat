import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
        apiKey: "AIzaSyD_8-Bkg0lBTjPgNIE95Nkh1nrGA2b7GNI",
        authDomain: "itfui-5cc9a.firebaseapp.com",
        databaseURL: "https://itfui-5cc9a-default-rtdb.firebaseio.com",
        projectId: "itfui-5cc9a",
        storageBucket: "itfui-5cc9a.appspot.com",
        messagingSenderId: "354053418181",
        appId: "1:354053418181:web:25e4f593246f91ec8d54ac"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
