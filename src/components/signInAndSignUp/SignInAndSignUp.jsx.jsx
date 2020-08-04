import React from 'react';
import { connect } from 'react-redux';

import Login from '../login/Login';
import SignUp from '../sign-up/SignUp';
import './SignInAndSignUp.scss';
const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <Login />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
