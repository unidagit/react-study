import { useState } from "react";

function App() {
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  // props로 함수도 보낼수 있다
  return (
    <div>
      {/* <Btn text={value} onClick={changeValue} /> */}
      {/* onClick 단순히 props일뿐이다 */}
      <Btn text={value} changeValue={changeValue} />
      <Btn text="Continue" />
    </div>
  );
}

function Btn({ text, changeValue }) {
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: "2rem",
      }}
    >
      {text}
    </button>
  );
}

export default App;
