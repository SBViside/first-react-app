import React from 'react';
import classes from './MySelect.module.css';

const MySelect = React.forwardRef((props, ref) => {
  return (
    <select ref={ref} className={classes.myInput} {...props}>
      <option disabled value="">{props.title}</option>
      {props.options.map(option => 
        <option value={option.value} key={option.key}>{option.name}</option>  
      )}
    </select>
  );
});

export default MySelect;