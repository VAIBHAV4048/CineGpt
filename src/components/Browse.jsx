import Header from "./Header";
import { API_OPTION } from "../utils/constants";
const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION,
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <>
      <Header isSign={true} />
      <h1>Browse</h1>
    </>
  );
};

export default Browse;
