import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movielist = ({ dataMovie }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        marginLeft: "150px",
        gap: "20px",
      }}
    >
      {dataMovie.map((movie) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.posterUrl} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
          <Link to={`/Trailer/${movie.id}`}>MORE DETAILS...</Link>
        </Card>
      ))}
    </div>
  );
};

export default Movielist;
