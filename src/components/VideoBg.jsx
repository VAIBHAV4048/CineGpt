import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const VideoBg = ({ movieId }) => {

    useEffect(()=>{
        getMovieVideos
    })
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/{movie_id}/videos",
      API_OPTION,
    );
    const json = await data.json();


  };
};
export default VideoBg;
