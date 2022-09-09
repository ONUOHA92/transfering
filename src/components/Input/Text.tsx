import React from "react";
import "./styles.scss";

const Text = ({ Placeholder }:any): JSX.Element => {
  return (
    <div>
      <input
        type="text"
        className="input py-4 px-5 w-full"
        placeholder={Placeholder}
      />
    </div>
  );
};

export default Text;
