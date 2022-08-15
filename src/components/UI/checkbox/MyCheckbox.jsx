import React from "react";
import cls from "./MyCheckbox.module.css";

const MyCheckbox = React.forwardRef(({ id, title, ...props }, ref) => {
  return (
    <div className={cls.myCheckbox} {...props}>
      <input ref={ref} type="checkbox" id={id} />
      <label htmlFor={id}>{title}</label>
    </div>
  );
});

export default MyCheckbox;
