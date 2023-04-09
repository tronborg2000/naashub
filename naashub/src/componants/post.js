import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Post = ({ post, onDelete }) => {
  const { id, title, content, author, date } = post;

  return (
    <Card className="mb-4">
      <Card.Header>{author}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">Like</Button>
        <Button variant="secondary" className="ml-2">
          Comment
        </Button>
        <Button variant="danger" className="ml-2" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">{date}</Card.Footer>
    </Card>
  );
};

export default Post;
