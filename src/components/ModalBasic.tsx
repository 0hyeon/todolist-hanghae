import React from "react";
import styled from "styled-components";

function ModalBasic({ setModalOpen, id, title, content, writer }: any) {
  // 모달 끄기
  const closeModal = (prev: any) => {
    console.log(prev);
    setModalOpen(!prev);
  };

  return (
    <Container>
      <Close onClick={closeModal}>X</Close>
      <p>모달창입니다.</p>
    </Container>
  );
}
const Container = styled.div`
  width: 300px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;
const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
export default ModalBasic;
