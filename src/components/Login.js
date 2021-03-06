import React, {useContext} from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Context} from "../index";
import firebase from "firebase";


const Login = () => {
    const {auth} = useContext(Context)

    // ф-ція натиснення на кнопку
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        // console.log(user)
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Grid style={{width:400, background: 'blue'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={5}>
                        <Button style={{background: 'white'}} onClick={login} variant={"outlined"}>Авторизуватись за допомогою Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;