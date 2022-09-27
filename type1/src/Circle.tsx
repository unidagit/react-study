import React from "react";
import styled from "styled-components";

const Container = styled.div<CotainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

interface CotainerProps {
  bgColor: string;
  borderColor: string; //required
}
// 스타일컴포넌트가 받는 props를 타입스크립트에세 잘 설명해준다

interface CircleProps {
  bgColor: string; //required
  borderColor?: string; //option
  text?: string;
}
// Container가 받는 props를 타입스크립트에세 잘 설명해준다

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {/* 초기값은 borderColor이고 props로 받는게 없다면 undefined이면 bgColor로 해줘라. */}
      {text}
    </Container>
  );
}

export default Circle;
