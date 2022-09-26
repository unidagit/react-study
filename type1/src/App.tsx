import Circle from "./Circle";

function App() {
  return (
    <div>
      {/* props를 두번보내고 있음 */}
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
