import React from "react";
import './input.scss'

const Input = ({label, ...rest}) => {
  return (
    <div className="input-wrapper">
    <p className="label">{label}</p>
      <input type="text" className="input" placeholder="mamng" {...rest} />
    </div>
  );
};

export default Input;
