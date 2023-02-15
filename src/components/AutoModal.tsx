import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button } from '../page/Style'
import useDetectClose from '../hook/useDetectClose'
const AutoModal = (props: any) => {
  const dropDownRef = useRef()
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false) //커스텀훅
  return (
    <Container>
      <Background
        onClick={() => setIsOpen(() => props.closeModal(false))}
      ></Background>
      <ModalBlock ref={dropDownRef}>
        <div>auto모달입니다.</div>
        <div style={{ textAlign: 'right' }}>
          <Button
            width="100px"
            height="40px"
            bgColor="#fff"
            border="3px solid #FAB1A0"
            color="#D63031"
            onClick={() => props.closeModal(false)}
          >
            닫기
          </Button>
          <Button
            width="100px"
            height="40px"
            bgColor="#55EFC4"
            border="3px solid #55EFC4"
            color="#000"
          >
            확인
          </Button>
        </div>
      </ModalBlock>
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(221, 221, 221);
  opacity: 0.8;
`

const ModalBlock = styled.div<{ ref?: any }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: white;
  color: black;
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 1px 1px gray;
  justify-content: space-between;
`
export default AutoModal
