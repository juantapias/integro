import React from "react";
//App component
import { Textarea } from '../../../styles'

const Textareas = ({ attr, onChange }) => {
  const { name, placeholder } = attr;
  return (
    <Textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Textareas;
