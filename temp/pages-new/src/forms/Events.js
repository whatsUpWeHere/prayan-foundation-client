import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './eventform.css'; // Import your component's CSS if needed

function EventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to a server
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="form-container">
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="link">
          <Form.Label>Link</Form.Label>
          <Form.Control
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EventForm;
