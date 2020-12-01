import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: black;
    margin-bottom: 1rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #848484;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid #6e6e6e;
  }
  & + & {
    margin-top: 1rem;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  button {
    border: none;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  width: 100%;
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

function AuthForm({ type, form, onChange, onSubmit }) {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop>{text}</ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
        <button>구글로그인</button>
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthForm;
