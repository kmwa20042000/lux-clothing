import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import './Login.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import Button from '../button/Button';
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  actSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account?</h2>
        <span>Login Here</span>
        <form onSubmit={this.actSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            onChange={this.onChange}
            value={this.state.email}
            autocomplete='no'
            required
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            onChange={this.onChange}
            autocomplete='new-password'
            required
          />
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
