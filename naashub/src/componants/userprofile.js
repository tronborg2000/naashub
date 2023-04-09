import React from 'react';
import { Container, Card } from 'react-bootstrap';

const UserProfile = ({ user }) => {
  const { name, email, profilePicture } = user;

  return (
    <Container className="text-center">
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="rounded-circle my-4"
        width="150"
        height="150"
      />
      <Card className="mb-4">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>Email: {email}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;
