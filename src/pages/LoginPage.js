import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import AuthTemplate from "../components/Auth/AuthTemplate";

function LoginPage() {
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
}

export default LoginPage;
