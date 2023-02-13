import React, { useState } from "react";
import styled from "styled-components";
import { Alertsvg } from "../asset/alert";
function Style() {
  const [isName, setName] = useState<string>("");
  const [isNumber, setNumber] = useState<string>("");
  const changeEnteredNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const removedCommaValue: number = Number(value.replaceAll(",", ""));
    setNumber(removedCommaValue.toLocaleString());
  };
  return (
    <div>
      <TopWrapper>
        <H2>Button</H2>
        <ButtonWrap>
          <Button
            width="200px"
            fontWeight="600"
            bgColor="#fff"
            border="3px solid #55EFC4"
            onClick={() => {
              alert("버튼을 만들어보세요");
            }}
          >
            Large Primary Button
          </Button>
          <Button width="130px" bgColor="#55EFC4">
            Medium
          </Button>
          <Button width="100px" bgColor="#55EFC4">
            Small
          </Button>
        </ButtonWrap>
        <ButtonWrap>
          <Button
            width="200px"
            fontWeight="600"
            bgColor="#fff"
            border="3px solid #FAB1A0"
            onClick={() => {
              prompt("어렵나요?");
            }}
          >
            Large Primary Button&nbsp;
            <Alertsvg />
          </Button>
          <Button width="130px" color="#D63031" bgColor="#FAB1A0">
            Medium
          </Button>
          <Button width="100px" color="#D63031" bgColor="#FAB1A0">
            Small
          </Button>
        </ButtonWrap>
      </TopWrapper>
      <TopWrapper>
        <H2>Input</H2>
        <ButtonWrap>
          이름 :
          <Input
            type="text"
            value={isName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          가격 :
          <Input type="number" value={isNumber} onChange={changeEnteredNum} />
        </ButtonWrap>
      </TopWrapper>
      <H2>Modal</H2>
      <H2>Select</H2>
    </div>
  );
}
const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const H2 = styled.div`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const Button = styled.button<{
  width?: string;
  bgColor?: string;
  color?: string;
  border?: string;
  fontWeight?: string;
}>`
  border: ${(props) => (props.border ? props.border : null)};
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  color: ${(props) => (props.color ? props.color : "#000")};
  height: 45px;
  padding: 1px 6px;

  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  width: ${(props) => (props.width ? props.width : "110px")};
  &:active {
    filter: brightness(50%);
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Input = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
  /* 화살표없애기 */
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export default Style;
