import Circle from "./Circle";

function App() {
  return (
    <div>
      {/* props를 두번보내고 있음 */}
      <Circle borderColor="pink" bgColor="teal" />
      <Circle bgColor="tomato" text="오로라" />
    </div>
  );
}

export default App;
