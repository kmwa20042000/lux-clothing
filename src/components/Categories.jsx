import React, { Fragment } from 'react';
import '../styles/categories.scss';

const Categories = () => {
  return (
    <Fragment>
      <div className='categories'>
        <h1>Hi</h1>
        <div className='directory-menu'>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'> Hats </div>
              <div className='subtitle'> Shop Now </div>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'> Shoes </div>
              <div className='subtitle'> Shop Now </div>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'> Jackets </div>
              <div className='subtitle'> Shop Now </div>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'> Women's </div>
              <div className='subtitle'> Shop Now </div>
            </div>
          </div>
          <div className='menu-item'>
            <div className='content'>
              <div className='title'> Men's </div>
              <div className='subtitle'> Shop Now </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
