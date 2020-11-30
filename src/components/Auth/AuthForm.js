import React from "react";
import styled from "styled-components";

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #d8d8d8;
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
    color: #151515;
    border-bottom: 1px solid #6e6e6e;
  }
  & + & {
    margin-top: 1rem;
  }
`;
function AuthForm() {
  return (
    <AuthFormBlock>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
      </form>
    </AuthFormBlock>
  );
}

export default AuthForm;
