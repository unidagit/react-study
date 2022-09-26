import React from "react";
import styled from "styled-components";

const Container = styled.div<CotainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

interface CotainerProps {
  bgColor: string;
}
// 스타일컴포넌트가 받는 props를 타입스크립트에세 잘 설명해준다

interface CircleProps {
  bgColor: string;
}
// Container가 받는 props를 타입스크립트에세 잘 설명해준다

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
