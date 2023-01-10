import React from "react";
import { useParams } from "react-router-dom";

const Trailer = ({ dataMovie }) => {
  const { idmovie } = useParams();
  console.log(dataMovie);
  const foundmovie = dataMovie.find((el) => el.id === idmovie);
  //console.log(foundmovie);
  return (
    <div>
      <h3> {foundmovie.title}</h3>
      <p> {foundmovie.description} </p>
      <img src={foundmovie.posterUrl} alt="movie"></img>
      <iframe controls src={foundmovie.trailerUrl}></iframe>
    </div>
  );
};

export default Trailer;
