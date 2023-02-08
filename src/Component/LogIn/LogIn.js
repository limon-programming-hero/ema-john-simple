import React, { useContext, useState } from 'react';
import './LogIn.css';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { userContext } from './../../App';
import { useNavigate, Outlet } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useContext(userContext);
    const noUser = {
        name: '',
        email: '',
        password: '',
        // HasAccount: false,
        submitFeedback: ''
    }
    const [HasAccount, SetHasAccount] = useState(false);
    const [user, SetUser] = useState(noUser);
    const [noPass, SetNoPass] = useState(<p></p>);
    const [confirmPass, SetConfirmPass] = useState(false);

    const HandleBlur = (e) => {
        const userInfo = { ...user };
        if (e.target.name === 'email') {
            const IsEmail = /^\S+@\S+\.\S+$/.test(e.target.value);
            userInfo[e.target.name] = e.target.value
            IsEmail && SetUser(userInfo);
        }
        else if (e.target.name === 'password') {
            const IsLength = e.target.value.length > 6;
            const IsNumber = /\d/.test(e.target.value);
            const IsPassword = IsNumber && IsLength;
            userInfo[e.target.name] = e.target.value
            IsPassword && SetUser(userInfo);
        }
        else if (e.target.name === 'confirmPassword') {
            e.target.value === user.password ? SetConfirmPass(true) : SetConfirmPass(false);
        }
    }
    // let submitFeedback = '';

    const SubmitHandler = (e) => {
        console.log(confirmPass, HasAccount);
        const userInfo = { ...user }
        if (confirmPass && !HasAccount) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    userInfo.submitFeedback = 'Account created Successfully!';
                    SetUser(userInfo);
                    setUserLogin({ name: user.name, email: user.email });
                    navigate('/shipment');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    userInfo.submitFeedback = error.message;
                    SetUser(userInfo);
                });
            SetNoPass(<p></p>)
        }
        if (confirmPass && HasAccount) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    userInfo.submitFeedback = 'Account Signed In Successfully!'
                    SetUser(userInfo);
                    setUserLogin({ name: user.name, email: user.email })
                    navigate('/shipment');
                })
                .catch((error) => {
                    var errorCode = error.code;
                    userInfo.submitFeedback = error.message;
                    SetUser(userInfo);
                });
            SetNoPass(<p></p>)
        }
        if (!confirmPass) {
            SetNoPass(<p style={{ color: 'red', textAlign: 'center' }}>Confirm password is not same!</p>)
        }
        if (user.password === '') {
            SetNoPass(<p style={{ color: 'red', textAlign: 'center' }}>password must be more than 6 character containing with at lest one number.</p>)
        }
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                {HasAccount || <input onBlur={HandleBlur} type="text" name="name" placeholder='Name' />}
                <input onBlur={HandleBlur} type="email" name="email"
                    placeholder='Email' required />
                <input onBlur={HandleBlur} type="password" name="password" placeholder='Password' required />
                <input onBlur={HandleBlur} type="password" name="confirmPassword" placeholder='Confirm Password' required />
                <input type="Submit" value={HasAccount ? 'Sign In' : 'Sign Up'} />
                <p onClick={() => { SetHasAccount(!HasAccount) }} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Already has an account?</p>
                {noPass}
                <p className='success'>{user.submitFeedback}</p>
            </form>


        </div>
    );
};

export default LogIn;