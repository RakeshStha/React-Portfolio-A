import React, { Component } from 'react';
import {Container, Jumbotron, Card } from 'react-bootstrap';

class data extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
}

export const About = () => (

    <Container>
        <h1 className="text-center">About us</h1>
        <Jumbotron>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
        </Jumbotron>
        <Card>
            <Card.Body>
                <Card.Title><h2 className="text-center">Our Services : </h2></Card.Title>
                <div>


                </div>
            </Card.Body>
        </Card>
        <br></br>
        </Container>
        
)
  export default About;
