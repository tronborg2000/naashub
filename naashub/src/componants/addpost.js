import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="postTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="postContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Post
      </Button>
    </Form>
  );
};

export default AddPost;
