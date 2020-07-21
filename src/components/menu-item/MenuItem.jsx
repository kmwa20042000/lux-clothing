import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

export const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => {
  return (
    <Fragment>
      <div
        className={` ${size} menu-item `}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
            display: 'block',
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
export default withRouter(MenuItem);
