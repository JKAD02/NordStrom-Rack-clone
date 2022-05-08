import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Signin from "./Signin";
import SignUp from "./SignUp";

const clientId =
  "797700426904-6dafiripn594iocspv3ujrou33ceq88h.apps.googleusercontent.com";

function Login() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div className='mainDiv'>
      <h2>
        <span onClick={() => setLogin(false)}>Sign In</span> |{" "}
        <span onClick={() => setLogin(true)}>Sign Out</span>
      </h2>
      {isLogin ? <SignUp /> : <Signin />}
      <div>
        {showloginButton ? (
          <GoogleLogin
            className='g-login'
            clientId={clientId}
            buttonText='Sign In'
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ) : null}

        {showlogoutButton ? (
          <GoogleLogout
            clientId={clientId}
            buttonText='Sign Out'
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>
        ) : null}
      </div>
    </div>
  );
}
export default Login;
