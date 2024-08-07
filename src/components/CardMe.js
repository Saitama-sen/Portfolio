import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ({ img, title, desc, gitLink, disabled }) {
  return (
    <Card style={{ width: "18rem", margin: ".7rem" }}>
      <Card.Img variant="top" src={img} className="card-img-top" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <a href={gitLink} target="_blank">
          <Button disabled={disabled} variant="dark">
            Open Project
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}
