import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/alerts/alertAction';
import './Login.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import Button from '../button/Button';
class Login extends Component {
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
      this.props.setAlert(error.message, 'error');
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
            autoComplete='no'
            required
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            onChange={this.onChange}
            autoComplete='new-password'
            required
          />
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button type='button' onClick={signInWithGoogle} isGoogleSignIn>
              GOOGLE SIGN-IN
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, { setAlert })(Login);
