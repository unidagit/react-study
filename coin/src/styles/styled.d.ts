import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}

//.d.ts를 타입선언파일이라고 한다. TS코드의 타입 추론을 돕는 파일이다.
//첫번째 단계는 styled.d.ts 라는 테마에 사용될 변수들의 타입들을 선언하는 파일을 만드는 것이다.
