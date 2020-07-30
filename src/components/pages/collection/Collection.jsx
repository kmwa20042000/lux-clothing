import React from 'react';
import CollectionItem from '../../collection-item/CollectionItem';
import './Collection.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../../redux/shop/shopSelector';
const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h1 className='title'>{title}</h1>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
//ownProps = props of this component
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
