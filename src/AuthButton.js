import React from "react";

const AuthButton = props => {
  let { isLoggedIn } = props;

  if (isLoggedIn) {
    return <button>Logout1</button>;
  } else {
    return <button>Login2</button>;
  }

};

export default AuthButton;