import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import './Header.scss';
const Header = ({ currentUser, hidden }) => {
  const userLocal = JSON.parse(localStorage.getItem('authUser'));
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {userLocal ? (
          <div className='option' onClick={() => auth.signOut()}>
            Log Out
          </div>
        ) : (
          <Link className='option' to='/signin'>
            Log in
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};
//pass in state in the function
//state.user.currentUser,
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
//higher order components are functions that take component as argument and then return a newly injected component
