import { FC, useState } from "react";
import styled from "styled-components";

// Components
import LoginHeader from "../Header";
import LoginForm from "./components/LoginForm";

const LoginContainer: FC = () => {
  return (
    <StyledWrapper>
      <div>
        <LoginHeader />
        <LoginForm />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default LoginContainer;
