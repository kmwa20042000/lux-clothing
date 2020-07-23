import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/Button';
import './CartDropDown.scss';
import CartItem from '../cart-item/CartItem';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <Button>Check Out</Button>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropDown);
