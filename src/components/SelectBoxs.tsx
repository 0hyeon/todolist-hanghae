import React, { useState } from "react";
import styled from "styled-components";

const SelectBoxs = (props: any) => {
  const [currentValue, setCurrentValue] = useState(props.optionData[0]);
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e: any) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };
  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {props.optionData.map((data: any) => (
          <Option
            key={data.key}
            value={data.value}
            onClick={handleOnChangeSelectValue}
          >
            {data}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};
const SelectBox = styled.div`
  margin-bottom: 80px;
  position: relative;
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 8px 28px;
  border-radius: 12px;
  background-color: #ffffff;
  justify-content: space-between;
  align-self: center;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  border: 1px solid #ddd;
  cursor: pointer;
  &::after {
    content: "▼";
    /* position: absolute;
    top: 1px;
    right: 8px; */
    color: #000;
    font-size: 14px;
  }
`;
const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul<{ show: boolean }>`
  position: absolute;
  list-style: none;
  top: 50px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: auto;
  padding: 0;
  border-radius: 8px;
  background-color: #fff;
  border: ${(props) => (props.show ? "1px solid #ddd;" : "")};
  box-sizing: border-box;
  color: #000;
  max-height: ${(props) => (props.show ? "none" : "0")};
`;
const Option = styled.li`
  font-size: 14px;
  padding: 16px 18px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #ddd;
  }
`;

export default SelectBoxs;
