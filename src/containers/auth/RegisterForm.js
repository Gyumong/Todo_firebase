import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initForm } from "../../stores/auth";
import AuthForm from "../../components/Auth/AuthForm";

function RegisterForm() {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
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
  };

  useEffect(() => {
    dispatch(initForm("register"));
  }, [dispatch]);
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
