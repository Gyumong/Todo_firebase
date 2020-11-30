import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: #343a40;
  &:hover {
    background: #adb5bd;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
