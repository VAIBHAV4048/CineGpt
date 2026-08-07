import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION,
    );
    console.log(data.status);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    console.log(json);
  };
};

export default useNowPlayingMovies;
