import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../collection-overview/CollectionOverview';
import CollectionPage from '../pages/collection/Collection';
//nesting routes here
const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
