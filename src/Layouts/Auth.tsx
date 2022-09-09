import React, { useEffect } from "react";
const Auth = ({ children }:any): JSX.Element => {
  useEffect((): void => { window.scrollTo(0, 0) }, []);
  return (
    <div>
      <div className="auth-layout py-20">
        {children}
       </div>
    </div>
  )
}

export default Auth;
