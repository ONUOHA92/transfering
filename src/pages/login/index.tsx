import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// @ts-ignore
import AuthLayout from "../../Layouts/Auth.tsx";
// @ts-ignore
import LayoutCard from "../../components/Card/LayoutCard.tsx";
// @ts-ignore
import BackButton from "../../components/Buttons/BackButton.tsx";
// @ts-ignore
import Email from "../../components/Input/Email.tsx";
// @ts-ignore
import Password from "../../components/Input/Password.tsx";
// @ts-ignore
import Button from "../../components/Buttons/Button.tsx";
import "./styles.scss";


const Login = (): JSX.Element => {
  const history = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')






  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(email, password);
  }


  const handleNavigateBack = (): void => history(-1);
  return (
    <div>
      <div>
        <AuthLayout>
          <div>
            <LayoutCard>
              <BackButton onClick={handleNavigateBack} />
              <div className="pb-10">
                <p id="login" className="mt-5">
                  Log In to your<br />
                  Account
                </p>
                <div className="mt-10 form-container">
                  <div>
                    <p className="mb-3">Email Address</p>
                    <Email
                      type="text"
                      Placeholder="Enter email adress"
                      value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-7">
                    <p className="mb-3">Password</p>
                    <Password
                      type='password'
                      Placeholder="Enter password"
                      value={password}
                      onChange={(e: any) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <button className="float-right mt-5" onSubmit={handleSubmit}>
                      Forgot Password?
                    </button>
                  </div>
                  <div className="flex justify-center mt-28">
                    <Button label="Log in" customedClasses="py-5 px-28" />
                  </div>
                  <div className="flex justify-center mt-14">
                    <p>Don't have an Account? <span className="text-red-700 cursor-pointer">Sign Up</span> here</p>
                  </div>
                </div>
              </div>
            </LayoutCard>
          </div>
        </AuthLayout>
      </div>
    </div>
  )
}

export default Login;
