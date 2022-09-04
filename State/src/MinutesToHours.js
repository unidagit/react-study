import React, { useState } from "react";

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  //[현재값, 현재값을 변경하는 함수]
  const [flipped, setflipped] = useState(false);
  //내가 flip을 했는지 안했는지를 알려줌
  //시 -> 분
  //분 -> 시
  const onChange = (e) => {
    setAmount(e.target.value);
  };

  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setflipped((current) => !current);
  };
  //flip 값을 반대로 전환시키는 함수
  //true -> false
  //false -> true
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped} //비활성화
          // disabled={flipped === true}
          //flip상태에 따라서 disabled 또는 emabled로 바꿔줄 수 있음.
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={!flipped}
          // disabled={flipped === false}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>{flipped ? "Turn back" : "flip"}</button>
    </div>
  );
}

export default MinutesToHours;
