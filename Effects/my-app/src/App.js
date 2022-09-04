import React, { useEffect, useState } from "react";

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

function Hello() {
  useEffect(() => {
    console.log("created!");
  }, []);
  return <div>Hello</div>;
}

export default App;
