import { useParams } from "react-router";

function Coin() {
  const { coinId } = useParams();
  console.log(coinId); //Coin의 주소를 받아옴.
  return <h1>Coin:{coinId}</h1>;
}

export default Coin;
