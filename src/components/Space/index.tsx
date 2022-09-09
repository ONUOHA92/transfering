import React from "react";
import  "./styles.scss";

const Space = ({ children }:any): JSX.Element => {
  return (
    <div className="element-space">
      {children}
    </div>
  )
};

export default Space;
