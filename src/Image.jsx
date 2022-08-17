import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css';


const Image = ({
  src, alt, className,
}) => {
  const classes = classNames(
    className,
  )
  return (

    <img 
     src={src}
    alt={alt}
    className={classes}
    />

    
  );
};
Image.propTypes = {
src: PropTypes.string,
alt: PropTypes.string,

};


export default Image;