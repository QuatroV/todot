import { FC } from "react";
import styled from "styled-components";

// Components
import GlassContainer from "./GlassContainer";

interface WarningProps {
  text: string;
}

const Warning: FC<WarningProps> = ({ text }) => {
  return <WarningGlassContainer>Error: {text}</WarningGlassContainer>;
};

const WarningGlassContainer = styled(GlassContainer)`
  background-color: rgb(255 189 189 / 33%);
  border: 2px solid rgb(255 7 7 / 30%);
`;

export default Warning;
