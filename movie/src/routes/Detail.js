import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState("");

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setItem(json.data.item);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return <div>{loading ? <strong>Detail Loading</strong> : null}</div>;
}

export default Detail;
