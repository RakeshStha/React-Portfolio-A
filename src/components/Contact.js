import React from 'react';
import {Container, Card, Jumbotron, Form, Button} from 'react-bootstrap';
import '../App.css';

export const Contact = () => (
    <Container>
        <Jumbotron className="con">
            <h1 className="text-center">Contact Us</h1>
        </Jumbotron>
        <Card>
            <Card.Body>
                <Card.Title><p className="text-center">Fill up the form. <b>Thank You!</b></p></Card.Title>
            <Form>
                <Form.Group controlId="firstname">
                    <Form.Label>First Name :</Form.Label>
                    <Form.Control type="text" placeholder="Your First Name"/>
                </Form.Group>
                <Form.Group controlId="lastname">
                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control type="text" placeholder="Your Last Name"/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email Address :</Form.Label>
                    <Form.Control type="email" placeholder="abc@gmail.com"/>
                </Form.Group>
                <Form.Group controlId="range">
                    <Form.Label> Your experience in programming</Form.Label>
                    <Form.Control type="range"/>
                </Form.Group>
                <Form.Group controlId="gender">
                    <Form.Label>Gender :</Form.Label>
                    <br></br>
                    <Form.Check  type="radio" inline aria-label="Male" label="Male"/>
                    <Form.Check  type="radio" inline aria-label="Female" label="Female"/>
                    <Form.Check  inline aria-label="Male" label="Custom"/>
                </Form.Group>
                <Form.Group controlId="Message">
                    <Form.Label>Your Message :</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="text-center">
                    <Button type="submit" >Send</Button>
                </Form.Group>
            </Form>
            </Card.Body>
        </Card>
        <br></br>
    </Container>
)
export default Contact;

  