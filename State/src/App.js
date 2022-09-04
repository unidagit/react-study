import React, { useState } from "react";
import MinutesToHours from "./MinutesToHours";
import KmToMiles from "./KmToMiles";

function App() {
  const [index, setIndex] = useState("xx");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value={"0"}>Minutes & Hours</option>
        <option value={"1"}>Km & Miles</option>
      </select>
      {index === "xx" ? "Please" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
