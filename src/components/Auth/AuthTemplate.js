import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthTemplateBlock = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5a9bc;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WihteBox = styled.div`
  .logo {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;
function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <WihteBox>
        <div className="logo">
          <Link to="/">오늘 뭐할래?</Link>
        </div>
        {children}
      </WihteBox>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;
