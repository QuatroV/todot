import { FC, useState } from "react";
import styled from "styled-components";

import plusIcon from "../../../public/icons/plus.svg";

import Tag from "./Tag";

import { addTask } from "../../../assets/utils";

const TaskForm: FC = () => {
  const [taskText, setTaskText] = useState("");
  const handleClick = async () => {
    addTask(taskText);
    setTaskText("");
  };
  return (
    <StyledWrapper>
      <StyledMainPart
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <StyledCheckboxPart>
        <StyledSubmitButton
          src={plusIcon.src}
          width="40px"
          onClick={handleClick}
        />
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

const StyledMainPart = styled.input.attrs({ type: "text" })`
  flex: 2;
  border: none;
  margin-right: 8px;
`;

const StyledCheckboxPart = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSubmitButton = styled.input.attrs({ type: "image" })`
  border-radius: 25%;
`;

const StyledTimeBlock = styled.div`
  color: gray;
`;

export default TaskForm;
