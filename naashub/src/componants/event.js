import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Event = ({ event }) => {
  const { id, title, description, date, location } = event;

  return (
    <Card className="mb-4">
      <Card.Header>{date}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{location}</Card.Text>
        <Button variant="primary">Join</Button>
      </Card.Body>
    </Card>
  );
};

export default Event;
