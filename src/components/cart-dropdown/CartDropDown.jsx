import React from 'react';
import Button from '../button/Button';
import './CartDropDown.scss';

const CartDropDown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <Button>Check Out</Button>
    </div>
  );
};

export default CartDropDown;
