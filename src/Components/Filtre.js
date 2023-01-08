import { Rating } from "@mui/material";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Form } from "react-bootstrap";

const Filtre = (setSearch, setRate, Rate) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>
        <Rating
          name="simple-controlled"
          Value={Rate}
          max={10}
          onChange={(event, newValue) => setRate(newValue)}
        />
      </Form>
    </div>
  );
};

export default Filtre;
