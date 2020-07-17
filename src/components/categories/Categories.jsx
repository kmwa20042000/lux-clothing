import React, { Fragment } from 'react';
import Directory from '../directory/Directory';
import './categories.scss';

const Categories = () => {
  return (
    <Fragment>
      <div className='categories'>
        <Directory />
      </div>
    </Fragment>
  );
};

export default Categories;
