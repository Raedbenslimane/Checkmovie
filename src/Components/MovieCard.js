import React from "react";
import { Rating } from "@mui/material";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieCard = ({ dataMovie }) => {
  return (
    <div>
      <Row
        style={{
          width: "18 rem",
          height: "370px",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        {dataMovie.map((movie) => (
          <Col>
            <Card>
              <Card.Img
                style={{ width: "18 rem", height: "370px" }}
                variant="top"
                src={movie.posterUrl}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
              </Card.Body>
              <Rating name="read-only" value={movie.Rating} readOnly />
            </Card>
            <Link to={`/Trailer/${movie.id}`}>MORE DETAILS...</Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default MovieCard;
