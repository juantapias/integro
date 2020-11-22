import React from "react";
//App component
import { Input } from "../styles";
const Inputs = ({ attr, onChange }) => {
  const { type, name, placeholder } = attr;
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.name, e.target.value)}
    />
  );
};

export default Inputs;
