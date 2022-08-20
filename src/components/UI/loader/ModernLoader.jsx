import React from "react";
import classes from "./ModernLoader.module.css";

function ModernLoader(props) {
  return (
    <div {...props} className={classes.roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ModernLoader;
