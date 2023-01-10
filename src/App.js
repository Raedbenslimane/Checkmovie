import { useState } from "react";
import "./App.css";
import { data } from "./Components/data.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Films from "./Components/Films";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Trailer from "./Components/Trailer";

function App() {
  const [dataMovie, setDatamovie] = useState(data);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            index
            element={
              <Films dataMovie={dataMovie} setDatamovie={setDatamovie} />
            }
          ></Route>
          <Route
            path="/Trailer/:idmovie"
            element={<Trailer dataMovie={dataMovie} />}
          >
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
