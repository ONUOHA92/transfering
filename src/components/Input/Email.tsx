import React from "react";
import "./styles.scss";

const Email = ({ placeholder, type, value, onChange }: any): JSX.Element => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="input py-4 px-5 w-full"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Email;
