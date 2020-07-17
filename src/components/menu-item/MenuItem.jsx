import React, { Fragment } from 'react';
import './MenuItem.scss';
export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <Fragment>
      <div className={` ${size} menu-item `}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className='content'>
          <div className='title'> {title.toUpperCase()} </div>
          <span className='subtitle'> Shop Now </span>
        </div>
      </div>
    </Fragment>
  );
};
export default MenuItem;
