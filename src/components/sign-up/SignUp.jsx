import React from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/alerts/alertAction';
import { auth } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.scss';
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.props.setAlert('password need to match', 'error');
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        console.log(this.state);
      } catch (error) {
        this.props.setAlert(error.message, 'error');
      }
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>Sign Up Here</h2>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default connect(null, { setAlert })(SignUp);
/*
 
    */
