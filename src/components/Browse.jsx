import Header from "./Header";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContent from "./MainContent";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header isSign={true} />
    <MainContent></MainContent>
    </>
  );
};

export default Browse;
