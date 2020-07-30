import React from 'react';
import './CollectionItem.scss';
import Button from '../button/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartAction';
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        Add to cart
      </Button>
    </div>
  );
};
CollectionItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};
const mapDispatToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatToProps)(CollectionItem);
