import { FC } from "react";
import styled from "styled-components";

// Icon
import todoListIcon from "../public/icons/todoListIcon.svg";

// Components
import GlassContainer from "./GlassContainer";

const Header: FC = () => {
  return (
    <StyledGlassContainer>
      <StyledImg src={todoListIcon.src} />
      <StyledH1>
        toDot<StyledSup>by QuatroV</StyledSup>
      </StyledH1>
    </StyledGlassContainer>
  );
};

const StyledSup = styled.sup`
  margin-left: 10px;
  color: rgb(117 117 117);
  font-size: 20px;
`;

const StyledGlassContainer = styled(GlassContainer)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledImg = styled.img`
  width: 100px;
  margin-right: 14px;
`;

const StyledH1 = styled.h1`
  font-size: 60px;
  margin: 0px;
`;

export default Header;
