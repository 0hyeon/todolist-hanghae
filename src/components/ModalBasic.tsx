import React from 'react'
import styled from 'styled-components'
const ModalBasic = (props: any) => {
  return (
    <Container>
      <Background>
        <ModalBlock>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
          <Close onClick={() => props.closeModal(false)}>닫기</Close>
          <Close>확인</Close>
        </ModalBlock>
      </Background>
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
const Close = styled.span`
  font-size: 30px;
  cursor: pointer;
`
const ModalBlock = styled.div`
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
`
export default ModalBasic
