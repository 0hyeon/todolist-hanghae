import React, { useState } from 'react'
import styled from 'styled-components'
import { Alertsvg } from '../asset/alert'
import AutoModal from '../components/AutoModal'
import ModalBasic from '../components/ModalBasic'
import SelectBoxs from '../components/SelectBoxs'
function Style() {
  const [isName, setName] = useState<string>('')
  const [isNumber, setNumber] = useState<string>('')
  const [ModalHandle, setModalHandle] = useState<boolean>(false)
  const [isAutoModal, setAutoModal] = useState<boolean>(false)

  const changeEnteredNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value // 입력값을 value 라고 선언
    const numCheck = /^[0-9,]/.test(value) // 입력값이 숫자와 콤마(,)인지 확인 (불린값이 나옴)

    if (!numCheck && value) return // 숫자가 아닌 문자로 이루어져 있으면 pass! (입력이 x)

    if (numCheck) {
      // 숫자이면
      const numValue = value.replaceAll(',', '') // 잠시 콤마를 때주고
      value = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // 받은 값에 3자리수마다 콤마를 추가
    }
    setNumber(value) // 바깥에서 사용할 수 있도록 state 값에 세팅해주자
  }
  const submitClcik = (isName: string, isNumber: string) => {
    if (isName === '' || isNumber === '') {
      alert('이름과 가격 모두 입력해주세요.')
      return
    }
    let pureNum = isNumber.split(',').join('')
    alert(`{ name: ${isName}, price: ${pureNum}}`)
  }
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
            height="50px"
            onClick={() => {
              alert('버튼을 만들어보세요')
            }}
          >
            Large Negative Button
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
            height="50px"
            fontWeight="600"
            bgColor="#fff"
            border="3px solid #FAB1A0"
            color="#D63031"
            onClick={() => {
              prompt('어렵나요?')
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
          <Input type="text" value={isNumber} onChange={changeEnteredNum} />
          <Button
            width="100px"
            height="40px"
            fontWeight="600"
            bgColor="#55EFC4"
            onClick={() => {
              submitClcik(isName, isNumber)
            }}
          >
            저장
          </Button>
        </ButtonWrap>
      </TopWrapper>
      <TopWrapper>
        <H2>Modal</H2>
        <ButtonWrap>
          <Button
            width="100px"
            height="40px"
            bgColor="#55EFC4"
            onClick={() => setModalHandle(true)}
          >
            open modal
          </Button>
          {ModalHandle && <ModalBasic closeModal={setModalHandle} />}
          <Button
            width="200px"
            height="50px"
            fontWeight="600"
            bgColor="#fff"
            border="3px solid #FAB1A0"
            color="#D63031"
            onClick={() => setAutoModal(true)}
          >
            open modal
          </Button>
          {isAutoModal && <AutoModal closeModal={setAutoModal} />}
        </ButtonWrap>
      </TopWrapper>
      <TopWrapper height="200px" border="3px solid #ddd" marginTop="50px">
        <H2>Select</H2>
        <ButtonWrap>
          <SelectBoxs
            optionData={['js', 'nodejs', 'java', 'react']}
          ></SelectBoxs>
          <SelectBoxs optionData={['리액트', '자바']}></SelectBoxs>
          <SelectBoxs optionData={['리액트', '자바']}></SelectBoxs>
        </ButtonWrap>
      </TopWrapper>
    </div>
  )
}
const TopWrapper = styled.div<{
  border?: string
  marginTop?: string
  height?: string
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: ${(props) => (props.border ? props.border : null)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : null)};
  height: ${(props) => (props.height ? props.height : null)};
`
const H2 = styled.div`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`
export const Button = styled.button<{
  width?: string
  bgColor?: string
  color?: string
  border?: string
  fontWeight?: string
  height?: string
}>`
  border: ${(props) => (props.border ? props.border : null)};
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  color: ${({ color }) => (color ? color : '#000')};
  height: ${(props) => (props.height ? props.height : '45px')};
  padding: 1px 6px;

  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  width: ${(props) => (props.width ? props.width : '110px')};
  &:active {
    filter: brightness(50%);
  }
`
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
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
`
export default Style
