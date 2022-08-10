import React from 'react';
import classes from './Loader.module.css';

function Loader(props) {
  return (
    <div {...props} className={classes.loader}></div>
  );
}

export default Loader;