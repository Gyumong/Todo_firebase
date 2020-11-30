import React from "react";
import AuthTemplate from "../components/Auth/AuthTemplate";
import RegisterForm from "../containers/auth/RegisterForm";

function RegisterPage() {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
}

export default RegisterPage;
