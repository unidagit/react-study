//props로 다양한것을 넘겨줄 수 있다

function App() {
  return (
    <div>
      <Btn text="Save Changes" big={true} />
      <Btn text="Continue" big={false} />
    </div>
  );
}

function Btn({ text, big }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: "2rem",
        fontSize: big ? 18 : 16, //big={true} 18이고 big={false} 16이다
      }}
    >
      {text}
    </button>
  );
}

export default App;
