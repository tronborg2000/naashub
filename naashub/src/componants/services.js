import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Services = ({ service }) => {
  const { id, title, description, provider } = service;

  return (
    <Card className="mb-4">
      <Card.Header>{provider}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
  );
};

export default Services;
