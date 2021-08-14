import { useEffect } from "react";
import { useParams } from "react-router-dom";
// 사이트 이동 같은 것은 react-router-dom에서 import하는 것인듯
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
