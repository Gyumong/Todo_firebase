import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initForm, register } from "../../stores/auth";
import AuthForm from "../../components/Auth/AuthForm";
import { check } from "../../stores/user";

function RegisterForm() {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
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
    dispatch(register({ username, password }));
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
      dispatch(check());
      return;
    }
  }, [auth, authError, dispatch]);
  // user 체크
  useEffect(() => {
    if (user) {
      console.log("기모찌맨");
      console.log(user);
    }
  }, [user]);
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
