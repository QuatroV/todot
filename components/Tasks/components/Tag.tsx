import { FC } from "react";
import styled from "styled-components";

interface TagProps {
  text: string;
}

const Tag: FC<TagProps> = ({ text }) => {
  return <StyledWrapper>#{text}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  width: fit-content;
  background-color: #6060ff57;
  border: 1px solid #1c1c84a1;
  border-radius: 8px;
  padding: 4px;
  :not(:last-child) {
    margin-right: 4px;
  }
`;

export default Tag;
