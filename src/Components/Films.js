import React, { useState } from "react";
import Add from "./Add";
import Filtre from "./Filtre";
import MovieCard from "./MovieCard";

const Films = ({ setDatamovie, dataMovie }) => {
  const AddMovie = (newMovie) => {
    setDatamovie([...dataMovie, newMovie]);
  };
  const [search, setSearch] = useState("");
  const [Rate, setRate] = useState(0);
  return (
    <div>
      <div display={{ display: "flex" }}>
        <Add AddMovie={AddMovie} />
        <Filtre setSearch={setSearch} setRate={setRate} rate={Rate} />
      </div>
      <MovieCard
        dataMovie={dataMovie.filter(
          (movie) =>
            movie.title.trim().toLowerCase().includes(search) &&
            movie.rating >= Rate
        )}
      />
    </div>
  );
};

export default Films;
