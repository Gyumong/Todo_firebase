import React from "react";
import styled from "styled-components";

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #f5a9bc;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WihteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;
function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <WihteBox>{children}</WihteBox>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;
