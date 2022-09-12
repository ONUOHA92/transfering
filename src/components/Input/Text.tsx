import React from "react";
import "./styles.scss";

interface Props {
  placeholder: string
  type: string,
  value: any,
  onChange : any
}

const Text = ({ placeholder, type, value, onChange }: Props): JSX.Element => {
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



export default Text;
