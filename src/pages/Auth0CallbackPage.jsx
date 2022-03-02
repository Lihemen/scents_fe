import React, { useEffect } from "react";

import { useAuth } from "react-use-auth";

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth();

  useEffect(() => {
    handleAuthentication();
  }, [handleAuthentication]);
  return (
    <div>
      <h1>Auth0CallbackPage, redirecting now...</h1>
    </div>
  );
};

export default Auth0CallbackPage;
