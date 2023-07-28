import React from "react";
import { Card, Button} from "react-bootstrap";




export const PokeCard = ({name, id, weight}) => {


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> ID: {id}</Card.Text>
        <Card.Text>Peso: {weight}</Card.Text>
        <Button className="button-card py-2 px-3 " to={`/${name}`}>
            Ver detalle
          </Button>
      </Card.Body>
    </Card>
  );
};
