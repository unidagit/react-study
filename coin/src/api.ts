// 이 함수는 json .data를 반환해줘야함 ->fetcher 함수는 promise여야함
import axios from "axios";
const BASE_URL = `https://api.coinpaprika.com/v1`;
// const PRICEURL = `https://ohlcv-api.nomadcoders.workers.dev/?coinId=`;

// const customAxios = axios.create({
//   baseURL: ``, // 기본 서버 주소 입력
//   timeout: 500,
// });
// 이건 함수형으로 해줘야함
export const fetchCoins = async () => {
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  const res = await axios.get(`${BASE_URL}/coins`);
  return res.data;
};
// coin 화면 api
export const coinUrl = async (coinId?: string) => {
  const res = await axios.get(`${BASE_URL}/coins/${coinId}`);
  return res.data;
};
export const priceUrl = async (coinId?: string) => {
  const res = await axios.get(`${BASE_URL}/tickers/${coinId}`);
  return res.data;
};
// // 차트 화면
// export const chartCoin = (coinId: string) => {
//   return customAxios.get(`${PRICEURL}${coinId}`).then((res) => res.data);
// };
