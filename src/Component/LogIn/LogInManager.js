import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';


export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const GoogleSignUp = (user, email, password) => {
    const userInfo = { ...user };
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            userInfo.submitFeedback = 'Account created Successfully!';
            userInfo.navigate = true;
            return userInfo;
        })
        .catch((error) => {
            // const errorCode = error.code;
            userInfo.submitFeedback = error.message;
            userInfo.navigate = false;
            return userInfo;
        });
}

export const GoogleSignIn = (user, email, password) => {
    const userInfo = { ...user };
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            // var user = userCredential.user;f
            userInfo.submitFeedback = 'Account Signed In Successfully!'
            userInfo.navigate = true;
            return userInfo;
        })
        .catch((error) => {
            // var errorCode = error.code;
            userInfo.submitFeedback = error.message;
            userInfo.navigate = false;
            return userInfo;
        });
}