import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/Button';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './CartDropDown.scss';
import { toggleCartHidden } from '../../redux/cart/cartAction';
import { selectCartItems } from '../../redux/cart/cartSelector';
import CartItem from '../cart-item/CartItem';

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <span className='empty-message'>Cart is empty..</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Check Out
      </Button>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
