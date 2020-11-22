import React from "react";
//App component
import { Input } from '../../../styles'

const Inputs = ({ attr, onChange }) => {
  const { name, type, placeholder } = attr;
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Inputs;
