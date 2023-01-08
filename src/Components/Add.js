import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Rating } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import MovieCard from "./MovieCard";

const Add = ({ AddMovie }) => {
  const [show, setShow] = useState(false);

  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
  });
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const Handlechange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const HandleSave = () => {
    AddMovie(newMovie);
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={Handlechange}
                name="title"
                type="text"
                placeholder="Enter Title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={Handlechange}
                type="text"
                name="description"
                placeholder="Enter Description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Poster Url image</Form.Label>
              <Form.Control
                onChange={Handlechange}
                name="posterUrl"
                type="text"
                placeholder="Enter Poster Url"
              />
            </Form.Group>
            <Rating
              name="simple-controlled"
              defaultValue={0}
              max={10}
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleSave}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
