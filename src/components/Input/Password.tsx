import React from "react";
import "./styles.scss";

const Password = ({Placeholder}:any): JSX.Element => {
  return (
    <div>
      <input type="password" className="input py-4 px-5 w-full" placeholder={Placeholder} />
    </div>
  )
}

export default Password;
