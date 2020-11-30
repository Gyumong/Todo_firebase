import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initForm, register } from "../../stores/auth";
import AuthForm from "../../components/Auth/AuthForm";

function RegisterForm() {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return;
    }
    dispatch({ username, password });
  };

  useEffect(() => {
    dispatch(initForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("에러");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      return;
    }
  }, [auth, authError]);
  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterForm;
