import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const params = useParams();
  const location = useLocation();
  let navigate = useNavigate();
  return (
    <Wrapper>
      <Box>
        ID :{params.id}
        <br />
        제목 : {location.state.title}
        <br />
        내용 : {location.state.content}
        <Button onClick={() => navigate(-1)}>이전으로</Button>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
const Box = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  margin: 10px 0px;
  cursor: pointer;
`;
export default Detail;
