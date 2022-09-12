import React from "react";
import "./styles.scss";

const Password = ({ placeholder, type, value, onChange }: any): JSX.Element => {
  return (
    <div>
      <input
        type={type}
        className="input py-4 px-5 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </div>
  )
}

export default Password;
