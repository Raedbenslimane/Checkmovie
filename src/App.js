import { useState } from "react";
import "./App.css";
import { data } from "./Components/data.js";
import MovieCard from "./Components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Components/Add";
import Filtre from "./Components/Filtre";
import { width } from "@mui/system";

function App() {
  const [dataMovie, setDatamovie] = useState(data);
  const [search, setSearch] = useState("");
  const [Rate, setRate] = useState(0);

  const AddMovie = (newMovie) => {
    setDatamovie([...dataMovie, newMovie]);
  };
  return (
    <div className="App">
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
}

export default App;
