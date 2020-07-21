import React from 'react';
import Login from '../login/Login';
import SignUp from '../sign-up/SignUp';
import './SignInAndSignUp.scss';
export const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <Login />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
