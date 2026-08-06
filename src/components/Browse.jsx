import Header from "./Header";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";

const Browse = () => {
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION,
    );
    console.log(data.status);
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
