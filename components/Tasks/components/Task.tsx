import { FC } from "react";
import styled from "styled-components";

import Tag from "./Tag";
import Checkbox from "../../Checkbox";

interface TaskProps {
  text: string;
  created_at: Date;
  isDone: boolean;
  tags?: Array<string>;
}

const Task: FC<TaskProps> = ({ text, created_at, isDone, tags }) => {
  const createdTimestamp =
    new Date(created_at).toLocaleTimeString() +
    ", " +
    new Date(created_at).toLocaleDateString();
  return (
    <StyledWrapper>
      <StyledMainPart>
        {text}
        <StyledTagsBlock>
          {tags?.map((tag) => (
            <Tag text={tag} />
          ))}
        </StyledTagsBlock>
        <StyledTimeBlock>Was created at {createdTimestamp}</StyledTimeBlock>
      </StyledMainPart>
      <StyledCheckboxPart>
        <StyledCheckbox checked={isDone} onChange={() => console.log("lol")} />
      </StyledCheckboxPart>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 16px;
  margin: 16px 16px 0px 16px;
  padding: 16px;
  :last-child {
    margin-bottom: 16px;
  }
`;

const StyledTagsBlock = styled.div`
  display: flex;
  align-items: baseline;
`;

const StyledMainPart = styled.div`
  flex: 2;
`;

const StyledCheckboxPart = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled(Checkbox)`
  border: 1px solid black;
  border-radius: 25%;
`;

const StyledTimeBlock = styled.div`
  color: gray;
`;

export default Task;
