import { FC, useState } from "react";
import styled from "styled-components";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, className }) => {
  return (
    <CheckboxContainer checked={checked} className={className}>
      <StyledCheckbox checked={checked} onClick={onChange}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

const StyledCheckbox = styled.div<{ checked?: boolean }>`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: ${(props) =>
    props.checked
      ? "-webkit-linear-gradient(to right,#0072ff,#00c6ff);background: linear-gradient(to right,#0072ff,#00c6ff);"
      : "white"};
  border: 2px solid white;
  border-radius: 25%;
  transition: all 150ms;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const CheckboxContainer = styled.div<{ checked?: boolean }>`
  display: inline-block;
  vertical-align: middle;
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export default Checkbox;
